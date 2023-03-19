Here is some sample fake data for the CRM and ERP database schemas provided above:

CRM Database:

accounts
account_id | name | industry | address | city | state | country | zip_code | website
-----------|--------------------|----------------|-------------------|---------------|-------|---------|----------|---------------------
1 | Acme Corporation | Manufacturing | 123 Main St | New York | NY | USA | 10001 | www.acme-corp.com
2 | MegaTech Solutions | Technology | 456 Tech Blvd | San Francisco | CA | USA | 94105 | www.megatech.com

contacts
contact_id | account_id | first_name | last_name | email | phone | job_title
-----------|------------|------------|-----------|-----------------------------|---------------|------------------
1 | 1 | John | Doe | john.doe@acme-corp.com | (555) 123-4567 | CEO
2 | 2 | Jane | Smith | jane.smith@megatech.com | (555) 987-6543 | Sales Manager

activities
activity_id | contact_id | type | description | created_at | status
------------|------------|-----------|--------------------------|---------------------|---------
1 | 1 | Email | Follow up with John Doe | 2023-03-17 10:00:00 | Completed
2 | 2 | Call | Call Jane Smith | 2023-03-17 14:00:00 | Pending

campaigns
campaign_id | name | type | start_date | end_date | budget | status
------------|----------------|-------------|--------------|---------------|---------|--------
1 | Spring Sale | Email | 2023-04-01 | 2023-04-30 | 10000 | Scheduled
2 | Tech Expo 2023 | Trade Show | 2023-05-15 | 2023-05-18 | 15000 | Planned

leads
lead_id | source | campaign_id | first_name | last_name | email | phone | company | status
--------|----------|-------------|------------|-----------|-----------------------|---------------|------------------|---------
1 | LinkedIn | 1 | Alice | Johnson | alice.johnson@email.com | (555) 555-1234 | ABC Enterprises | New
2 | Referral | 2 | Bob | Brown | bob.brown@email.com | (555) 555-5678 | XYZ Inc. | Contacted

ERP Database:

products
product_id | name | description | category | price | stock
-----------|--------------------|----------------------|----------|-------|-------
1 | Widget A | High-quality widget | Widget | 9.99 | 250
2 | Gadget B | Innovative gadget | Gadget | 14.99 | 100

suppliers
supplier_id | name | contact_name | email | phone | address | city | state | country | zip_code
------------|-------------------|--------------|-------------------------|---------------|----------------|----------|-------|---------|---------
1 | Widget Suppliers | Tom Smith | tom.smith@widgetsupp.com | (555) 111-2222 | 789 1st Ave