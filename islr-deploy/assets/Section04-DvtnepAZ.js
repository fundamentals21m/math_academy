import{j as e}from"./index-CsNFfZHI.js";import{L as r,C as t}from"./Callout-D30c_Ud6.js";import{R as s}from"./ContentBlocks-D_yuWJNS.js";function l(){return e.jsxs(r,{sectionId:4,children:[e.jsx("h2",{children:"Getting Started with R"}),e.jsx("p",{children:"R is a free software environment for statistical computing and graphics. It is widely used among statisticians and data scientists for developing statistical software and data analysis. In this lab, we'll cover the basics of R that you'll need throughout this course."}),e.jsxs(t,{type:"info",children:[e.jsx("strong",{children:"Installing R:"})," Download R from"," ",e.jsx("a",{href:"https://cran.r-project.org",className:"text-primary-400 hover:underline",children:"cran.r-project.org"}),". We also recommend installing RStudio, a powerful IDE for R, from"," ",e.jsx("a",{href:"https://posit.co/downloads/",className:"text-primary-400 hover:underline",children:"posit.co"}),"."]}),e.jsx("h2",{children:"Basic Commands"}),e.jsxs("p",{children:["R uses functions to perform operations. The basic syntax for calling a function is",e.jsx("code",{className:"text-emerald-400",children:"function_name(argument1, argument2, ...)"}),"."]}),e.jsx("h3",{children:"Creating Vectors"}),e.jsxs("p",{children:["The ",e.jsx("code",{className:"text-emerald-400",children:"c()"})," function is used to create a vector (a sequence of values):"]}),e.jsx(s,{title:"Creating Vectors",output:`[1] 1 3 2 5
[1] 4`,children:`# Create a vector
x <- c(1, 3, 2, 5)
x

# Get the length
length(x)`}),e.jsx("h3",{children:"Basic Arithmetic"}),e.jsx("p",{children:"R can perform arithmetic operations on vectors element-wise:"}),e.jsx(s,{title:"Vector Arithmetic",output:`[1]  2  6  4 10
[1]  1  9  4 25
[1] 1.000000 1.732051 1.414214 2.236068`,children:`x <- c(1, 3, 2, 5)

# Multiply each element by 2
x * 2

# Square each element
x^2

# Square root of each element
sqrt(x)`}),e.jsx("h3",{children:"Sequences"}),e.jsxs("p",{children:["Create sequences of numbers using the colon operator or the ",e.jsx("code",{className:"text-emerald-400",children:"seq()"})," function:"]}),e.jsx(s,{title:"Creating Sequences",output:`[1] 1 2 3 4 5 6 7 8 9 10
[1]  1  3  5  7  9
[1] 0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1.0`,children:`# Simple sequence
1:10

# Sequence with step
seq(1, 10, by = 2)

# Sequence with specific length
seq(0, 1, length.out = 11)`}),e.jsx("h2",{children:"Indexing Data"}),e.jsxs("p",{children:["Accessing elements of a vector or matrix is done using square brackets ",e.jsx("code",{className:"text-emerald-400",children:"[]"}),":"]}),e.jsx(s,{title:"Indexing Vectors",output:`[1] 2
[1] 2 4
[1] 1 3 5
[1] 2 4`,children:`x <- c(1, 2, 3, 4, 5)

# Access second element
x[2]

# Access multiple elements
x[c(2, 4)]

# Exclude elements (negative indexing)
x[-c(2, 4)]

# Logical indexing
x[x > 2]`}),e.jsx("h3",{children:"Matrices"}),e.jsxs("p",{children:["Matrices are 2-dimensional arrays. Create them with the ",e.jsx("code",{className:"text-emerald-400",children:"matrix()"})," function:"]}),e.jsx(s,{title:"Working with Matrices",output:`     [,1] [,2]
[1,]    1    3
[2,]    2    4
[1] 2
[1] 1 2
[1] 1 3`,children:`# Create a 2x2 matrix (filled by column)
A <- matrix(c(1, 2, 3, 4), nrow = 2, ncol = 2)
A

# Access element in row 2, column 1
A[2, 1]

# Access entire first column
A[, 1]

# Access entire first row
A[1, ]`}),e.jsx("h2",{children:"Loading Data"}),e.jsx("p",{children:"R can read data from various file formats. The most common is CSV (comma-separated values):"}),e.jsx(s,{title:"Loading CSV Data",output:`'data.frame':	200 obs. of  4 variables:
 $ TV       : num  230.1 44.5 17.2 151.5 180.8 ...
 $ radio    : num  37.8 39.3 45.9 41.3 10.8 ...
 $ newspaper: num  69.2 45.1 69.3 58.5 58.4 ...
 $ sales    : num  22.1 10.4 9.3 18.5 12.9 ...`,children:`# Read a CSV file
Advertising <- read.csv("Advertising.csv")

# View structure of the data
str(Advertising)

# First few rows
head(Advertising)

# Summary statistics
summary(Advertising)`}),e.jsx("h2",{children:"Basic Graphics"}),e.jsxs("p",{children:["R has powerful plotting capabilities. The ",e.jsx("code",{className:"text-emerald-400",children:"plot()"})," function creates scatter plots:"]}),e.jsx(s,{title:"Creating Plots",children:`# Basic scatter plot
plot(Advertising$TV, Advertising$sales)

# Add labels and title
plot(Advertising$TV, Advertising$sales,
     xlab = "TV Advertising Budget ($1000s)",
     ylab = "Sales (units)",
     main = "Sales vs TV Advertising",
     col = "blue",
     pch = 19)

# Add a trend line
abline(lm(sales ~ TV, data = Advertising), col = "red")`}),e.jsx("h3",{children:"Multiple Plots"}),e.jsx(s,{title:"Panel of Plots",children:`# Set up a 2x2 grid of plots
par(mfrow = c(2, 2))

# Create four plots
plot(Advertising$TV, Advertising$sales, main = "TV")
plot(Advertising$radio, Advertising$sales, main = "Radio")
plot(Advertising$newspaper, Advertising$sales, main = "Newspaper")
hist(Advertising$sales, main = "Sales Distribution")

# Reset to single plot
par(mfrow = c(1, 1))`}),e.jsx("h2",{children:"Data Frames"}),e.jsx("p",{children:"Data frames are the most common way to store data in R. They're like spreadsheets with rows (observations) and columns (variables):"}),e.jsx(s,{title:"Working with Data Frames",output:`[1] 200   4
[1] "TV"        "radio"     "newspaper" "sales"`,children:`# Dimensions
dim(Advertising)

# Column names
names(Advertising)

# Access a column (three equivalent ways)
Advertising$sales
Advertising[, "sales"]
Advertising[, 4]

# Create new column
Advertising$total_budget <- Advertising$TV + Advertising$radio + Advertising$newspaper`}),e.jsx("h2",{children:"Getting Help"}),e.jsxs("p",{children:["R has extensive built-in documentation. Use the ",e.jsx("code",{className:"text-emerald-400",children:"?"})," or",e.jsx("code",{className:"text-emerald-400",children:"help()"})," function:"]}),e.jsx(s,{title:"Getting Help",children:`# Get help on a function
?mean
help(mean)

# Search for help
??regression

# Examples
example(plot)`}),e.jsx("h2",{children:"Essential Functions Summary"}),e.jsx("div",{className:"my-6 overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-dark-700",children:[e.jsx("th",{className:"text-left py-2 px-3 text-dark-300",children:"Function"}),e.jsx("th",{className:"text-left py-2 px-3 text-dark-300",children:"Description"})]})}),e.jsxs("tbody",{className:"text-dark-400",children:[e.jsxs("tr",{className:"border-b border-dark-800",children:[e.jsx("td",{className:"py-2 px-3 font-mono text-emerald-400",children:"c()"}),e.jsx("td",{className:"py-2 px-3",children:"Combine values into a vector"})]}),e.jsxs("tr",{className:"border-b border-dark-800",children:[e.jsx("td",{className:"py-2 px-3 font-mono text-emerald-400",children:"length()"}),e.jsx("td",{className:"py-2 px-3",children:"Length of a vector"})]}),e.jsxs("tr",{className:"border-b border-dark-800",children:[e.jsx("td",{className:"py-2 px-3 font-mono text-emerald-400",children:"mean(), sd(), var()"}),e.jsx("td",{className:"py-2 px-3",children:"Mean, standard deviation, variance"})]}),e.jsxs("tr",{className:"border-b border-dark-800",children:[e.jsx("td",{className:"py-2 px-3 font-mono text-emerald-400",children:"sum(), prod()"}),e.jsx("td",{className:"py-2 px-3",children:"Sum and product of elements"})]}),e.jsxs("tr",{className:"border-b border-dark-800",children:[e.jsx("td",{className:"py-2 px-3 font-mono text-emerald-400",children:"min(), max(), range()"}),e.jsx("td",{className:"py-2 px-3",children:"Minimum, maximum, range"})]}),e.jsxs("tr",{className:"border-b border-dark-800",children:[e.jsx("td",{className:"py-2 px-3 font-mono text-emerald-400",children:"matrix()"}),e.jsx("td",{className:"py-2 px-3",children:"Create a matrix"})]}),e.jsxs("tr",{className:"border-b border-dark-800",children:[e.jsx("td",{className:"py-2 px-3 font-mono text-emerald-400",children:"read.csv()"}),e.jsx("td",{className:"py-2 px-3",children:"Read CSV file into data frame"})]}),e.jsxs("tr",{className:"border-b border-dark-800",children:[e.jsx("td",{className:"py-2 px-3 font-mono text-emerald-400",children:"head(), tail()"}),e.jsx("td",{className:"py-2 px-3",children:"First/last rows of data"})]}),e.jsxs("tr",{className:"border-b border-dark-800",children:[e.jsx("td",{className:"py-2 px-3 font-mono text-emerald-400",children:"summary()"}),e.jsx("td",{className:"py-2 px-3",children:"Summary statistics"})]}),e.jsxs("tr",{className:"border-b border-dark-800",children:[e.jsx("td",{className:"py-2 px-3 font-mono text-emerald-400",children:"plot()"}),e.jsx("td",{className:"py-2 px-3",children:"Create scatter plots"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 px-3 font-mono text-emerald-400",children:"lm()"}),e.jsx("td",{className:"py-2 px-3",children:"Fit linear regression model"})]})]})]})}),e.jsxs(t,{type:"success",children:[e.jsx("strong",{children:"Practice!"})," The best way to learn R is by doing. Try loading a dataset and exploring it with the functions above. The ",e.jsx("code",{className:"text-emerald-400",children:"Advertising"})," dataset we'll use throughout this course is available in the ISLR2 package."]})]})}export{l as default};
