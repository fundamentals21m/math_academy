import { LessonLayout } from '@/components/layout/LessonLayout';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section04Quiz } from '@/data/quizzes';
import { Callout } from '@/components/common/Callout';
import { RCodeBlock } from '@/components/common/ContentBlocks';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      <h2>Getting Started with R</h2>

      <p>
        R is a free software environment for statistical computing and graphics. It is widely 
        used among statisticians and data scientists for developing statistical software and 
        data analysis. In this lab, we'll cover the basics of R that you'll need throughout 
        this course.
      </p>

      <Callout type="info">
        <strong>Installing R:</strong> Download R from{' '}
        <a href="https://cran.r-project.org" className="text-primary-400 hover:underline">
          cran.r-project.org
        </a>. We also recommend installing RStudio, a powerful IDE for R, from{' '}
        <a href="https://posit.co/downloads/" className="text-primary-400 hover:underline">
          posit.co
        </a>.
      </Callout>

      <h2>Basic Commands</h2>

      <p>
        R uses functions to perform operations. The basic syntax for calling a function is 
        <code className="text-emerald-400">function_name(argument1, argument2, ...)</code>.
      </p>

      <h3>Creating Vectors</h3>

      <p>
        The <code className="text-emerald-400">c()</code> function is used to create a vector 
        (a sequence of values):
      </p>

      <RCodeBlock
        title="Creating Vectors"
        output={`[1] 1 3 2 5
[1] 4`}
      >
{`# Create a vector
x <- c(1, 3, 2, 5)
x

# Get the length
length(x)`}
      </RCodeBlock>

      <h3>Basic Arithmetic</h3>

      <p>
        R can perform arithmetic operations on vectors element-wise:
      </p>

      <RCodeBlock
        title="Vector Arithmetic"
        output={`[1]  2  6  4 10
[1]  1  9  4 25
[1] 1.000000 1.732051 1.414214 2.236068`}
      >
{`x <- c(1, 3, 2, 5)

# Multiply each element by 2
x * 2

# Square each element
x^2

# Square root of each element
sqrt(x)`}
      </RCodeBlock>

      <h3>Sequences</h3>

      <p>
        Create sequences of numbers using the colon operator or the <code className="text-emerald-400">seq()</code> function:
      </p>

      <RCodeBlock
        title="Creating Sequences"
        output={`[1] 1 2 3 4 5 6 7 8 9 10
[1]  1  3  5  7  9
[1] 0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1.0`}
      >
{`# Simple sequence
1:10

# Sequence with step
seq(1, 10, by = 2)

# Sequence with specific length
seq(0, 1, length.out = 11)`}
      </RCodeBlock>

      <h2>Indexing Data</h2>

      <p>
        Accessing elements of a vector or matrix is done using square brackets <code className="text-emerald-400">[]</code>:
      </p>

      <RCodeBlock
        title="Indexing Vectors"
        output={`[1] 2
[1] 2 4
[1] 1 3 5
[1] 2 4`}
      >
{`x <- c(1, 2, 3, 4, 5)

# Access second element
x[2]

# Access multiple elements
x[c(2, 4)]

# Exclude elements (negative indexing)
x[-c(2, 4)]

# Logical indexing
x[x > 2]`}
      </RCodeBlock>

      <h3>Matrices</h3>

      <p>
        Matrices are 2-dimensional arrays. Create them with the <code className="text-emerald-400">matrix()</code> function:
      </p>

      <RCodeBlock
        title="Working with Matrices"
        output={`     [,1] [,2]
[1,]    1    3
[2,]    2    4
[1] 2
[1] 1 2
[1] 1 3`}
      >
{`# Create a 2x2 matrix (filled by column)
A <- matrix(c(1, 2, 3, 4), nrow = 2, ncol = 2)
A

# Access element in row 2, column 1
A[2, 1]

# Access entire first column
A[, 1]

# Access entire first row
A[1, ]`}
      </RCodeBlock>

      <h2>Loading Data</h2>

      <p>
        R can read data from various file formats. The most common is CSV (comma-separated values):
      </p>

      <RCodeBlock
        title="Loading CSV Data"
        output={`'data.frame':	200 obs. of  4 variables:
 $ TV       : num  230.1 44.5 17.2 151.5 180.8 ...
 $ radio    : num  37.8 39.3 45.9 41.3 10.8 ...
 $ newspaper: num  69.2 45.1 69.3 58.5 58.4 ...
 $ sales    : num  22.1 10.4 9.3 18.5 12.9 ...`}
      >
{`# Read a CSV file
Advertising <- read.csv("Advertising.csv")

# View structure of the data
str(Advertising)

# First few rows
head(Advertising)

# Summary statistics
summary(Advertising)`}
      </RCodeBlock>

      <h2>Basic Graphics</h2>

      <p>
        R has powerful plotting capabilities. The <code className="text-emerald-400">plot()</code> function 
        creates scatter plots:
      </p>

      <RCodeBlock
        title="Creating Plots"
      >
{`# Basic scatter plot
plot(Advertising$TV, Advertising$sales)

# Add labels and title
plot(Advertising$TV, Advertising$sales,
     xlab = "TV Advertising Budget ($1000s)",
     ylab = "Sales (units)",
     main = "Sales vs TV Advertising",
     col = "blue",
     pch = 19)

# Add a trend line
abline(lm(sales ~ TV, data = Advertising), col = "red")`}
      </RCodeBlock>

      <h3>Multiple Plots</h3>

      <RCodeBlock
        title="Panel of Plots"
      >
{`# Set up a 2x2 grid of plots
par(mfrow = c(2, 2))

# Create four plots
plot(Advertising$TV, Advertising$sales, main = "TV")
plot(Advertising$radio, Advertising$sales, main = "Radio")
plot(Advertising$newspaper, Advertising$sales, main = "Newspaper")
hist(Advertising$sales, main = "Sales Distribution")

# Reset to single plot
par(mfrow = c(1, 1))`}
      </RCodeBlock>

      <h2>Data Frames</h2>

      <p>
        Data frames are the most common way to store data in R. They're like spreadsheets 
        with rows (observations) and columns (variables):
      </p>

      <RCodeBlock
        title="Working with Data Frames"
        output={`[1] 200   4
[1] "TV"        "radio"     "newspaper" "sales"`}
      >
{`# Dimensions
dim(Advertising)

# Column names
names(Advertising)

# Access a column (three equivalent ways)
Advertising$sales
Advertising[, "sales"]
Advertising[, 4]

# Create new column
Advertising$total_budget <- Advertising$TV + Advertising$radio + Advertising$newspaper`}
      </RCodeBlock>

      <h2>Getting Help</h2>

      <p>
        R has extensive built-in documentation. Use the <code className="text-emerald-400">?</code> or 
        <code className="text-emerald-400">help()</code> function:
      </p>

      <RCodeBlock
        title="Getting Help"
      >
{`# Get help on a function
?mean
help(mean)

# Search for help
??regression

# Examples
example(plot)`}
      </RCodeBlock>

      <h2>Essential Functions Summary</h2>

      <div className="my-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2 px-3 text-dark-300">Function</th>
              <th className="text-left py-2 px-3 text-dark-300">Description</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-2 px-3 font-mono text-emerald-400">c()</td>
              <td className="py-2 px-3">Combine values into a vector</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 px-3 font-mono text-emerald-400">length()</td>
              <td className="py-2 px-3">Length of a vector</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 px-3 font-mono text-emerald-400">mean(), sd(), var()</td>
              <td className="py-2 px-3">Mean, standard deviation, variance</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 px-3 font-mono text-emerald-400">sum(), prod()</td>
              <td className="py-2 px-3">Sum and product of elements</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 px-3 font-mono text-emerald-400">min(), max(), range()</td>
              <td className="py-2 px-3">Minimum, maximum, range</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 px-3 font-mono text-emerald-400">matrix()</td>
              <td className="py-2 px-3">Create a matrix</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 px-3 font-mono text-emerald-400">read.csv()</td>
              <td className="py-2 px-3">Read CSV file into data frame</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 px-3 font-mono text-emerald-400">head(), tail()</td>
              <td className="py-2 px-3">First/last rows of data</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 px-3 font-mono text-emerald-400">summary()</td>
              <td className="py-2 px-3">Summary statistics</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 px-3 font-mono text-emerald-400">plot()</td>
              <td className="py-2 px-3">Create scatter plots</td>
            </tr>
            <tr>
              <td className="py-2 px-3 font-mono text-emerald-400">lm()</td>
              <td className="py-2 px-3">Fit linear regression model</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="success">
        <strong>Practice!</strong> The best way to learn R is by doing. Try loading a dataset 
        and exploring it with the functions above. The <code className="text-emerald-400">Advertising</code> dataset 
        we'll use throughout this course is available in the ISLR2 package.
      </Callout>

      <SectionQuiz sectionId={4} questions={section04Quiz} title="R Basics Quiz" />
    </LessonLayout>
  );
}
