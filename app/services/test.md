Here’s a full **project ticket description** you can use.

# Project Ticket: Website Status Checker

## Project Overview

Build a Python application that checks the availability and status of websites provided by the user.

The app should run in two versions:

1. **Terminal / backend version**
2. **Jupyter Notebook version**

The application must accept a list of website URLs from the user, loop through each website, send a request, check the status, and display the result.

Later, the app should also support:

* saving results
* generating a PDF report
* showing plots and visualizations in Jupyter

---

# Main Goal

Create a Python tool that helps users check whether websites are online, how fast they respond, and what status code they return.

---

# Functional Requirements

## 1. User input

The list of websites must be provided by the user, not hardcoded.

Possible input methods:

* terminal input one by one
* comma-separated input
* loading from a text file
* loading from CSV

Minimum requirement:

* user can paste multiple URLs in the terminal

Example:

```python
Enter websites separated by commas:
https://google.com, https://github.com, https://python.org
```

---

## 2. Website checking

For each website, the application must:

* loop through the list
* send an HTTP request
* detect if the site is reachable
* capture the HTTP status code
* measure response time
* handle errors without crashing

---

## 3. Output in terminal

The terminal app must print a readable result for each website.

Example output:

```python
https://google.com -> UP (200) | 0.34s
https://github.com -> UP (200) | 0.41s
https://python.org -> UP (200) | 0.29s
https://notrealwebsite12345.com -> DOWN
```

---

## 4. Summary report

After checking all websites, the app must print a summary such as:

* total websites checked
* how many are up
* how many are down
* average response time

Example:

```python
Summary:
Total websites: 4
UP: 3
DOWN: 1
Average response time: 0.35s
```

---

# Technical Requirements

## Terminal / Backend Version

Build a Python script that runs in the terminal using PyCharm.

### Suggested features

* accept user input
* validate URL format
* use loops to process websites
* use functions for clean code
* use `try/except` for error handling
* store results in a list of dictionaries

### Suggested result structure

```python
{
    "url": "https://google.com",
    "status": "UP",
    "status_code": 200,
    "response_time": 0.34
}
```

---

## Jupyter Notebook Version

Create a second version in Jupyter Notebook for analysis and visualization.

### Notebook should

* accept a list of URLs
* run the same checks
* store results in a pandas DataFrame
* display the table
* generate charts

### Suggested charts

* bar chart of response time by website
* pie chart of UP vs DOWN websites
* status code frequency chart

---

# PDF Report Feature

Add an option to generate a PDF report for the user.

## PDF should include

* project title
* date and time of check
* list of checked websites
* result table
* summary statistics
* optional charts from the Jupyter version

### Example sections

* Website Status Report
* Checked Websites
* Results Table
* Summary
* Visual Insights

---

# Learning Goals

This project should help the developer practice:

* Python loops
* lists and dictionaries
* functions
* conditionals
* error handling
* working with APIs / HTTP requests
* reading user input
* file creation
* PDF generation
* data visualization
* pandas and matplotlib

---

# Suggested Libraries

## Terminal version

* `requests`
* `time`

## Jupyter version

* `requests`
* `pandas`
* `matplotlib`

## PDF generation

Choose one:

* `fpdf`
* `reportlab`

---

# Expected Flow

## Terminal version flow

1. Ask user for websites
2. Convert input into a list
3. Loop through each website
4. Check website status
5. Save result
6. Print result
7. Print summary
8. Optionally save report
9. Optionally generate PDF

---

## Jupyter version flow

1. Define or load website list
2. Run checking logic
3. Store results in DataFrame
4. Display results table
5. Create charts
6. Save charts
7. Export PDF report

---

# Minimum Viable Version

The first working version must include:

* user enters websites
* app loops through all URLs
* app checks status
* app prints UP / DOWN
* app shows summary

---

# Intermediate Version

Add:

* response time
* file input
* save results to TXT or CSV
* better status labels:

  * 200 = UP
  * 404 = NOT FOUND
  * 500 = SERVER ERROR
  * timeout = DOWN

---

# Advanced Version

Add:

* PDF report generation
* charts
* Jupyter Notebook dashboard
* export results to CSV
* retry failed websites
* colored terminal output
* timestamp logging

---

# Example Deliverables

## 1. Terminal script

`website_checker.py`

## 2. Input file

`websites.txt`

## 3. Jupyter notebook

`website_checker_analysis.ipynb`

## 4. Output files

* `results.csv`
* `results.txt`
* `report.pdf`

---

# Example User Stories

## User Story 1

As a user, I want to provide a list of websites so the app can check them for me.

## User Story 2

As a user, I want to know whether each website is up or down.

## User Story 3

As a user, I want to see response times so I can understand performance.

## User Story 4

As a user, I want a PDF report so I can share the results.

## User Story 5

As a user, I want charts in Jupyter so I can visualize website health.

---

# Acceptance Criteria

## Terminal version

* user can input multiple URLs
* program loops through every URL
* program checks each website
* program does not crash on invalid URLs
* results are printed clearly
* summary is shown at the end

## Jupyter version

* results are shown in a DataFrame
* at least 2 plots are generated
* plots are readable
* notebook runs from top to bottom without errors

## PDF feature

* PDF file is created successfully
* PDF contains checked websites and results
* summary is included
* formatting is readable

---

# Nice-to-Have Features

* add retry logic for down sites
* show timestamp of each check
* support scheduled checks
* compare results across multiple runs
* include charts in the PDF
* show fastest and slowest website

---

# Suggested Folder Structure

```python
website-status-checker/
│
├── website_checker.py
├── website_checker_analysis.ipynb
├── websites.txt
├── results.csv
├── results.txt
├── report.pdf
├── charts/
│   ├── response_times.png
│   └── status_distribution.png
└── README.md
```

---

# Bonus Challenge

Extend the app so that after checking websites it asks:

```python
Do you want to generate a PDF report? (yes/no)
```

If the user types `yes`, generate the report automatically.

---

Here is a shorter **developer-style task summary** you can paste into Jira or Notion:

## Short Ticket Version

Build a Python Website Status Checker that accepts a list of website URLs from the user, loops through each URL, sends an HTTP request, and reports whether the website is UP or DOWN. The terminal version should display status code, response time, and a summary of results. A Jupyter Notebook version should store the results in a pandas DataFrame and generate charts such as response time by website and UP vs DOWN distribution. Add an export feature that generates a PDF report containing the checked websites, result table, summary statistics, and optional charts.

If you want, I can also write the **README.md version of this project ticket** in a cleaner GitHub style.
