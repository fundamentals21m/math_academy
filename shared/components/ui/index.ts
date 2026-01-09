// UI Component Library
// Magic Internet Math - Design System

export { Button, type ButtonProps, type ButtonVariant, type ButtonSize } from './Button';
export { Input, type InputProps } from './Input';
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, type CardProps } from './Card';
export { Badge, type BadgeProps, type BadgeVariant } from './Badge';
export { Spinner, type SpinnerProps, type SpinnerSize } from './Spinner';
export { Modal, ModalHeader, ModalTitle, ModalDescription, ModalContent, ModalFooter, type ModalProps } from './Modal';
export { Toast, ToastContainer, type ToastProps, type ToastVariant, type ToastPosition } from './Toast';
export { Alert, AlertTitle, AlertDescription, type AlertProps, type AlertVariant } from './Alert';
export { Tabs, TabsList, TabsTrigger, TabsContent, type TabsProps } from './Tabs';
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent, type AccordionProps } from './Accordion';
export { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuLink, NavigationMenuContent, type NavigationMenuProps } from './NavigationMenu';
export { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, type BreadcrumbProps } from './Breadcrumb';
export { Skeleton, type SkeletonProps } from './Skeleton';
export { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent, type TooltipProps } from './Tooltip';
export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel, type DropdownMenuProps } from './DropdownMenu';
export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, type SelectProps } from './Select';
export { Checkbox, type CheckboxProps } from './Checkbox';
export { RadioGroup, RadioGroupItem, type RadioGroupProps } from './RadioGroup';
export { Textarea, type TextareaProps } from './Textarea';
export { Toggle, type ToggleProps } from './Toggle';
export { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage, type FormProps, type FormFieldProps } from './Form';
export { Progress, type ProgressProps } from './Progress';
export { Slider, type SliderProps } from './Slider';
export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption, type TableProps } from './Table';
export { Pagination, PaginationItems, PaginationNext, PaginationPrev, PaginationEllipsis, type PaginationProps } from './Pagination';
export { Avatar, AvatarImage, AvatarFallback, type AvatarProps } from './Avatar';
export { Divider, type DividerProps } from './Divider';

// Re-export theme utilities
export { cn } from './utils';

// Default export with all components
export default {
  Button,
  Input,
  Card,
  Badge,
  Spinner,
  Modal,
  Toast,
  Alert,
  Tabs,
  Accordion,
  NavigationMenu,
  Breadcrumb,
  Skeleton,
  Tooltip,
  DropdownMenu,
  Select,
  Checkbox,
  RadioGroup,
  Textarea,
  Toggle,
  Form,
  Progress,
  Slider,
  Table,
  Pagination,
  Avatar,
  Divider,
};
