# ISLR Course Build Plan

## Course Metadata

| Field | Value |
|-------|-------|
| **Course ID** | `islr` |
| **Course Name** | Introduction to Statistical Learning |
| **Description** | An interactive course based on James et al.'s Introduction to Statistical Learning (2nd Edition) |
| **Icon** | 📊 |
| **Accent Color** | `emerald` |
| **Source PDF Chunks** | `/Users/brianhirschfield/Claude/elem_ml/` (403 PDF chunks) |
| **Target Directory** | `/Users/brianhirschfield/Claude/math_academy/islr/` |
| **Textbook** | James, Witten, Hastie, Tibshirani - "An Introduction to Statistical Learning with Applications in R" (2nd Edition, 2021) |

---

## Curriculum Structure (13 Chapters, 62 Sections)

### Chapter 1: Introduction
| Section ID | Title | Slug |
|------------|-------|------|
| 1 | Overview of Statistical Learning | `overview` |

### Chapter 2: Statistical Learning
| Section ID | Title | Slug |
|------------|-------|------|
| 2 | What Is Statistical Learning? | `what-is-statistical-learning` |
| 3 | Assessing Model Accuracy | `assessing-model-accuracy` |
| 4 | Lab: Introduction to R | `lab-intro-to-r` |
| 5 | Exercises | `ch2-exercises` |

### Chapter 3: Linear Regression
| Section ID | Title | Slug |
|------------|-------|------|
| 6 | Simple Linear Regression | `simple-linear-regression` |
| 7 | Multiple Linear Regression | `multiple-linear-regression` |
| 8 | Other Considerations in the Regression Model | `regression-considerations` |
| 9 | The Marketing Plan | `marketing-plan` |
| 10 | Comparison with K-Nearest Neighbors | `knn-comparison` |
| 11 | Lab: Linear Regression | `lab-linear-regression` |
| 12 | Exercises | `ch3-exercises` |

### Chapter 4: Classification
| Section ID | Title | Slug |
|------------|-------|------|
| 13 | Overview of Classification | `classification-overview` |
| 14 | Logistic Regression | `logistic-regression` |
| 15 | Generative Models for Classification | `generative-models` |
| 16 | Comparison of Classification Methods | `classification-comparison` |
| 17 | Generalized Linear Models | `glm` |
| 18 | Lab: Classification Methods | `lab-classification` |
| 19 | Exercises | `ch4-exercises` |

### Chapter 5: Resampling Methods
| Section ID | Title | Slug |
|------------|-------|------|
| 20 | Cross-Validation | `cross-validation` |
| 21 | The Bootstrap | `bootstrap` |
| 22 | Lab: Resampling | `lab-resampling` |
| 23 | Exercises | `ch5-exercises` |

### Chapter 6: Linear Model Selection and Regularization
| Section ID | Title | Slug |
|------------|-------|------|
| 24 | Subset Selection | `subset-selection` |
| 25 | Shrinkage Methods (Ridge & Lasso) | `shrinkage-methods` |
| 26 | Dimension Reduction Methods | `dimension-reduction` |
| 27 | Considerations in High Dimensions | `high-dimensions` |
| 28 | Lab: Model Selection | `lab-model-selection` |
| 29 | Exercises | `ch6-exercises` |

### Chapter 7: Moving Beyond Linearity
| Section ID | Title | Slug |
|------------|-------|------|
| 30 | Polynomial and Step Functions | `polynomial-step` |
| 31 | Splines | `splines` |
| 32 | Smoothing Splines and Local Regression | `smoothing-local` |
| 33 | Generalized Additive Models | `gams` |
| 34 | Lab: Non-linear Modeling | `lab-nonlinear` |
| 35 | Exercises | `ch7-exercises` |

### Chapter 8: Tree-Based Methods
| Section ID | Title | Slug |
|------------|-------|------|
| 36 | The Basics of Decision Trees | `decision-trees` |
| 37 | Bagging, Random Forests, Boosting, and BART | `ensemble-methods` |
| 38 | Lab: Decision Trees | `lab-trees` |
| 39 | Exercises | `ch8-exercises` |

### Chapter 9: Support Vector Machines
| Section ID | Title | Slug |
|------------|-------|------|
| 40 | Maximal Margin and Support Vector Classifiers | `svm-classifiers` |
| 41 | Support Vector Machines | `svm` |
| 42 | SVMs with Multiple Classes | `svm-multiclass` |
| 43 | Lab: Support Vector Machines | `lab-svm` |
| 44 | Exercises | `ch9-exercises` |

### Chapter 10: Deep Learning
| Section ID | Title | Slug |
|------------|-------|------|
| 45 | Single and Multilayer Neural Networks | `neural-networks` |
| 46 | Convolutional Neural Networks | `cnn` |
| 47 | Recurrent Neural Networks | `rnn` |
| 48 | Fitting Neural Networks | `fitting-nn` |
| 49 | Lab: Deep Learning | `lab-deep-learning` |
| 50 | Exercises | `ch10-exercises` |

### Chapter 11: Survival Analysis
| Section ID | Title | Slug |
|------------|-------|------|
| 51 | Survival and Censoring | `survival-censoring` |
| 52 | Regression Models with Survival Response | `survival-regression` |
| 53 | Lab: Survival Analysis | `lab-survival` |
| 54 | Exercises | `ch11-exercises` |

### Chapter 12: Unsupervised Learning
| Section ID | Title | Slug |
|------------|-------|------|
| 55 | Principal Components Analysis | `pca` |
| 56 | Clustering Methods | `clustering` |
| 57 | Lab: Unsupervised Learning | `lab-unsupervised` |
| 58 | Exercises | `ch12-exercises` |

### Chapter 13: Multiple Testing
| Section ID | Title | Slug |
|------------|-------|------|
| 59 | Hypothesis Testing Review | `hypothesis-testing` |
| 60 | Family-Wise Error Rate and False Discovery Rate | `fwer-fdr` |
| 61 | Lab: Multiple Testing | `lab-multiple-testing` |
| 62 | Exercises | `ch13-exercises` |

---

## New Components to Create

### 1. Algorithm Component (`src/components/common/Algorithm.tsx`)

**Purpose**: Display ML algorithms with pseudocode and optional interactive visualizers

**Props**:
```typescript
interface AlgorithmProps {
  title: string;
  complexity?: { time: string; space: string };
  interactive?: ReactNode;  // Optional visualizer component
  children: ReactNode;      // Pseudocode content
}
```

**Styling**: Cyan gradient (`from-cyan-500/10 to-cyan-600/5`), code/terminal icon

### 2. RCodeBlock Component (`src/components/common/RCodeBlock.tsx`)

**Purpose**: Display R code examples with syntax highlighting (read-only)

**Props**:
```typescript
interface RCodeBlockProps {
  title?: string;
  output?: string;        // R console output
  collapsible?: boolean;  // For long code blocks
  children: string;       // R code
}
```

### 3. Interactive Visualizers (`src/components/visualizers/`)

| Component | Chapter | Description | Priority |
|-----------|---------|-------------|----------|
| `BiasVarianceTradeoff.tsx` | 2 | Slider showing MSE = Bias² + Variance + Irreducible Error | HIGH |
| `LinearRegressionFitter.tsx` | 3 | Drag points, see regression line update in real-time | HIGH |
| `KMeansVisualizer.tsx` | 12 | Step through k-means iterations, see cluster assignments | HIGH |
| `DecisionTreeBuilder.tsx` | 8 | Interactive tree building, visualize splits | HIGH |
| `RidgeLassoPath.tsx` | 6 | Coefficient paths as λ varies (slider control) | HIGH |
| `PCAExplorer.tsx` | 12 | 3D point cloud, rotate to see 2D projections | HIGH |

---

## Implementation Phases

### Phase 1: Initialize Course Structure (COMPLETED)
- [x] Copy `course-template/` to `islr/`
- [x] Update `src/config/course.ts`
- [x] Update `vite.config.ts`
- [x] Update `package.json`
- [x] Update `index.html`
- [x] Add `'islr'` to `shared/types/courses.ts`
- [x] Create chunks symlink

### Phase 2: Create New Components (~2 hours)
- [ ] Create `Algorithm.tsx` in `src/components/common/`
- [ ] Create `RCodeBlock.tsx` in `src/components/common/`
- [ ] Create `src/components/visualizers/` directory
- [ ] Create placeholder visualizer components

### Phase 3: Build Interactive Visualizers (~8-12 hours)
Priority order:
1. `BiasVarianceTradeoff.tsx`
2. `LinearRegressionFitter.tsx`
3. `KMeansVisualizer.tsx`
4. `DecisionTreeBuilder.tsx`
5. `RidgeLassoPath.tsx`
6. `PCAExplorer.tsx`

### Phase 4: Create Curriculum and Extract Content (~40-60 hours)
- [ ] Create `src/data/curriculum.ts`
- [ ] Create `src/data/theorems.ts`
- [ ] Create Section01.tsx through Section62.tsx

### Phase 5: Generate Quizzes (~20-30 hours)
- 62 section quizzes × 60 questions = 3,720 questions
- 13 chapter quizzes × 20 questions = 260 questions

### Phase 6: Wire Routes (~1 hour)
- [ ] Update `App.tsx` with lazy imports for all 62 sections

### Phase 7: Register in Hub (~30 minutes)
- [ ] Add course card to root `index.html`
- [ ] Add progress tracking

---

## Key Theorems/Definitions Index

| ID | Type | Title | Chapter |
|----|------|-------|---------|
| `def-statistical-learning` | Definition | Statistical Learning | 2 |
| `def-mse` | Definition | Mean Squared Error | 2 |
| `def-bias` | Definition | Bias | 2 |
| `def-variance` | Definition | Variance | 2 |
| `thm-bias-variance` | Theorem | Bias-Variance Decomposition | 2 |
| `def-rss` | Definition | Residual Sum of Squares | 3 |
| `def-r-squared` | Definition | R² (Coefficient of Determination) | 3 |
| `def-f-statistic` | Definition | F-Statistic | 3 |
| `def-logistic-function` | Definition | Logistic Function | 4 |
| `def-odds` | Definition | Odds and Log-Odds | 4 |
| `def-lda` | Definition | Linear Discriminant Analysis | 4 |
| `def-qda` | Definition | Quadratic Discriminant Analysis | 4 |
| `thm-bayes-classifier` | Theorem | Bayes Optimal Classifier | 4 |
| `def-cross-validation` | Definition | Cross-Validation | 5 |
| `def-bootstrap` | Definition | Bootstrap | 5 |
| `def-ridge` | Definition | Ridge Regression | 6 |
| `def-lasso` | Definition | The Lasso | 6 |
| `thm-lasso-sparsity` | Theorem | Lasso Sparsity Property | 6 |
| `def-pca` | Definition | Principal Components Analysis | 6, 12 |
| `def-spline` | Definition | Spline | 7 |
| `def-gam` | Definition | Generalized Additive Model | 7 |
| `def-decision-tree` | Definition | Decision Tree | 8 |
| `def-gini-index` | Definition | Gini Index | 8 |
| `def-entropy` | Definition | Entropy (Classification) | 8 |
| `def-bagging` | Definition | Bagging | 8 |
| `def-random-forest` | Definition | Random Forest | 8 |
| `def-boosting` | Definition | Boosting | 8 |
| `def-hyperplane` | Definition | Hyperplane | 9 |
| `def-maximal-margin` | Definition | Maximal Margin Classifier | 9 |
| `def-svm` | Definition | Support Vector Machine | 9 |
| `def-kernel` | Definition | Kernel | 9 |
| `def-neural-network` | Definition | Neural Network | 10 |
| `def-activation-function` | Definition | Activation Function | 10 |
| `def-backpropagation` | Definition | Backpropagation | 10 |
| `def-cnn` | Definition | Convolutional Neural Network | 10 |
| `def-rnn` | Definition | Recurrent Neural Network | 10 |
| `def-survival-function` | Definition | Survival Function | 11 |
| `def-hazard-function` | Definition | Hazard Function | 11 |
| `def-censoring` | Definition | Censoring | 11 |
| `def-kaplan-meier` | Definition | Kaplan-Meier Estimator | 11 |
| `def-cox-model` | Definition | Cox Proportional Hazards Model | 11 |
| `def-k-means` | Definition | K-Means Clustering | 12 |
| `def-hierarchical-clustering` | Definition | Hierarchical Clustering | 12 |
| `def-dendrogram` | Definition | Dendrogram | 12 |
| `def-fwer` | Definition | Family-Wise Error Rate | 13 |
| `def-fdr` | Definition | False Discovery Rate | 13 |
| `thm-bonferroni` | Theorem | Bonferroni Correction | 13 |
| `def-benjamini-hochberg` | Definition | Benjamini-Hochberg Procedure | 13 |

---

## Notes

1. **PDF Chunks Location**: The 403 PDF chunks are symlinked at `islr/chunks/source` pointing to `/Users/brianhirschfield/Claude/elem_ml/`

2. **R Labs**: Include R code as read-only examples using the new `RCodeBlock` component.

3. **Interactive Visualizers**: Prioritize the 6 HIGH priority visualizers first.

4. **Content Extraction**: Focus on pedagogical clarity rather than verbatim copying.

5. **Quizzes**: Each section needs exactly 60 questions (20/20/20 by difficulty).
