#!/usr/bin/env python3
"""
Migrate courses to use shared layout components.

This script updates App.tsx in each course to:
1. Import Header/Sidebar from @shared/components/layout
2. Import CourseConfigProvider from @shared/contexts/CourseConfigContext
3. Import AchievementToastContainer from @shared/components/gamification
4. Add courseConfig constant
5. Add AchievementNotifications wrapper function
6. Wrap app with CourseConfigProvider
"""

import os
import re
from pathlib import Path

# Courses to migrate (excluding df-course which is already done)
# Also excluding abstract-algebra and basic-algebra which have different GamificationContext
COURSES_TO_MIGRATE = [
    'frost', 'tontines', 'secp256k1', 'bfi', 'lcn', 'probability',
    'calc1-course', 'calc_lib_art', 'calc_easy', 'linalg', 'real-analysis',
    'rudin-course', 'thales', 'euler-intro', 'why-math', 'mod-race',
    'math_history', 'road-to-serfdom', 'only-the-strong-survive', 'islr',
    'coding-theory-course', 'cryptography', 'game-theory', 'tao-analysis-1',
    'saylor-diss'
]

BASE_DIR = Path('/Users/brianhirschfield/Claude/math_academy')


def migrate_course(course_name: str) -> tuple[bool, str]:
    """Migrate a single course to use shared layout components."""
    app_path = BASE_DIR / course_name / 'src' / 'App.tsx'

    if not app_path.exists():
        return False, f"App.tsx not found for {course_name}"

    content = app_path.read_text()
    original_content = content

    # Skip if already migrated (has CourseConfigProvider)
    if 'CourseConfigProvider' in content:
        return True, f"{course_name} already migrated"

    # Skip if doesn't have standard Header/Sidebar imports
    if "from '@/components/layout/Header'" not in content and \
       "from '@/components/layout'" not in content:
        return False, f"{course_name} has non-standard layout imports"

    changes_made = []

    # 1. Update Header/Sidebar imports
    # Pattern: import { Header } from '@/components/layout/Header';
    #          import { Sidebar } from '@/components/layout/Sidebar';
    # Replace with: import { Header, Sidebar } from '@shared/components/layout';

    header_pattern = r"import \{ Header \} from '@/components/layout/Header';\n"
    sidebar_pattern = r"import \{ Sidebar \} from '@/components/layout/Sidebar';\n"

    if re.search(header_pattern, content) and re.search(sidebar_pattern, content):
        # Remove old imports
        content = re.sub(header_pattern, '', content)
        content = re.sub(sidebar_pattern, '', content)
        changes_made.append("Removed local Header/Sidebar imports")

    # Also handle combined import pattern
    combined_layout_pattern = r"import \{ Header, Sidebar \} from '@/components/layout';\n"
    if re.search(combined_layout_pattern, content):
        content = re.sub(combined_layout_pattern, '', content)
        changes_made.append("Removed combined local layout import")

    # 2. Update AchievementToastContainer import if present
    old_achievement_import = r"import \{ AchievementToastContainer \} from '@/components/gamification';"
    if re.search(old_achievement_import, content):
        content = re.sub(old_achievement_import, '', content)
        changes_made.append("Removed local AchievementToastContainer import")

    # 3. Update GamificationProvider import to include useGamification
    gam_import_pattern = r"import \{ GamificationProvider \} from '@/contexts/GamificationContext';"
    if re.search(gam_import_pattern, content):
        content = re.sub(
            gam_import_pattern,
            "import { GamificationProvider, useGamification } from '@/contexts/GamificationContext';",
            content
        )
        changes_made.append("Added useGamification to GamificationProvider import")

    # 4. Add new imports after existing imports
    # Find the last import statement
    import_section_end = 0
    for match in re.finditer(r"^import .+;\n", content, re.MULTILINE):
        import_section_end = max(import_section_end, match.end())

    if import_section_end == 0:
        return False, f"{course_name}: Could not find import section"

    new_imports = """import { CourseConfigProvider, type CourseConfig } from '@shared/contexts/CourseConfigContext';
import { AchievementToastContainer } from '@shared/components/gamification';
import { Header, Sidebar } from '@shared/components/layout';
import { curriculum } from '@/data/curriculum';
"""

    # Check if curriculum is already imported
    if "from '@/data/curriculum'" in content:
        new_imports = new_imports.replace("import { curriculum } from '@/data/curriculum';\n", "")

    # Insert new imports
    content = content[:import_section_end] + new_imports + content[import_section_end:]
    changes_made.append("Added shared component imports")

    # 5. Add courseConfig constant after imports (before first function/const)
    # Look for "// Eagerly load" or "const " after imports
    config_pattern = r"(// Eagerly load|// Lazy load|const [A-Z])"
    config_match = re.search(config_pattern, content)

    if config_match:
        insert_pos = config_match.start()
        course_config = """
// Course configuration for shared components
const courseConfig: CourseConfig = {
  id: COURSE_ID,
  name: COURSE_NAME,
  icon: COURSE_ICON,
  hubUrl: HUB_URL,
  features: FEATURES,
  curriculum,
};

"""
        content = content[:insert_pos] + course_config + content[insert_pos:]
        changes_made.append("Added courseConfig constant")

    # 6. Add AchievementNotifications wrapper before "export default function App()"
    wrapper_func = """
/** Wrapper that connects shared AchievementToastContainer to the gamification context */
function AchievementNotifications() {
  const { notifications, dismissNotification } = useGamification();
  return <AchievementToastContainer notifications={notifications} onDismiss={dismissNotification} />;
}

"""

    export_app_pattern = r"\nexport default function App\(\)"
    export_match = re.search(export_app_pattern, content)
    if export_match:
        content = content[:export_match.start()] + wrapper_func + content[export_match.start():]
        changes_made.append("Added AchievementNotifications wrapper")

    # 7. Replace <AchievementToastContainer /> with <AchievementNotifications />
    content = re.sub(
        r'<AchievementToastContainer\s*/>',
        '<AchievementNotifications />',
        content
    )
    changes_made.append("Updated AchievementToastContainer usage")

    # 8. Wrap with CourseConfigProvider
    # Find the pattern: <ErrorProvider>...<HashRouter>
    # Insert <CourseConfigProvider config={courseConfig}> after <ErrorProvider>

    # Pattern for the App function with nested providers
    error_provider_start = content.find('<ErrorProvider>')
    if error_provider_start != -1:
        # Find the opening of HashRouter after ErrorProvider
        hashrouter_start = content.find('<HashRouter>', error_provider_start)
        if hashrouter_start != -1:
            # Insert CourseConfigProvider before HashRouter
            indent = '          '  # Standard indentation
            course_provider_open = f'<CourseConfigProvider config={{courseConfig}}>\n{indent}'
            content = content[:hashrouter_start] + course_provider_open + content[hashrouter_start:]
            changes_made.append("Added CourseConfigProvider opening tag")

            # Find the closing </HashRouter> and add </CourseConfigProvider> after it
            # Need to re-find since we modified content
            hashrouter_end = content.find('</HashRouter>')
            if hashrouter_end != -1:
                hashrouter_end += len('</HashRouter>')
                course_provider_close = f'\n        </CourseConfigProvider>'
                content = content[:hashrouter_end] + course_provider_close + content[hashrouter_end:]
                changes_made.append("Added CourseConfigProvider closing tag")

    # 9. Check if COURSE_NAME, COURSE_ICON, HUB_URL are imported from config
    config_imports = re.search(r"import \{([^}]+)\} from '@/config'", content)
    if config_imports:
        current_imports = config_imports.group(1)
        needed = []
        for item in ['COURSE_ID', 'COURSE_NAME', 'COURSE_ICON', 'HUB_URL', 'FEATURES']:
            if item not in current_imports:
                needed.append(item)

        if needed:
            new_import_list = current_imports.strip()
            for item in needed:
                if new_import_list:
                    new_import_list += f', {item}'
                else:
                    new_import_list = item
            content = re.sub(
                r"import \{[^}]+\} from '@/config'",
                f"import {{ {new_import_list} }} from '@/config'",
                content
            )
            changes_made.append(f"Added missing config imports: {needed}")

    # Write the updated content
    if content != original_content:
        app_path.write_text(content)
        return True, f"{course_name}: {', '.join(changes_made)}"
    else:
        return False, f"{course_name}: No changes needed or pattern not matched"


def main():
    """Run migration on all courses."""
    print("=" * 70)
    print("Migrating courses to shared layout components")
    print("=" * 70)

    success_count = 0
    skip_count = 0
    fail_count = 0

    for course in COURSES_TO_MIGRATE:
        success, message = migrate_course(course)
        if success:
            if "already migrated" in message:
                print(f"SKIP: {message}")
                skip_count += 1
            else:
                print(f"OK: {message}")
                success_count += 1
        else:
            print(f"FAIL: {message}")
            fail_count += 1

    print("=" * 70)
    print(f"Results: {success_count} migrated, {skip_count} skipped, {fail_count} failed")
    print("=" * 70)


if __name__ == '__main__':
    main()
