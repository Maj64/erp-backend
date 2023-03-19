A CRM (Customer Relationship Management) database focuses on storing and managing customer data and interactions, while an ERP (Enterprise Resource Planning) database handles various business processes, such as finance, inventory, and manufacturing. Below are simplified database schemas for both CRM and ERP systems:

### CRM Database Schema:

1. `accounts`
- `account_id` (Primary Key)
- `name`
- `industry`
- `address`
- `city`
- `state`
- `country`
- `zip_code`
- `website`
2. `contacts`
- `contact_id` (Primary Key)
- `account_id` (Foreign Key)
- `first_name`
- `last_name`
- `email`
- `phone`
- `job_title`
3. `activities`
- `activity_id` (Primary Key)
- `contact_id` (Foreign Key)
- `type`
- `description`
- `created_at`
- `status`
4. `campaigns`
- `campaign_id` (Primary Key)
- `name`
- `type`
- `start_date`
- `end_date`
- `budget`
- `status`
5. `leads`
- `lead_id` (Primary Key)
- `source`
- `campaign_id` (Foreign Key)
- `first_name`
- `last_name`
- `email`
- `phone`
- `company`
- `status`

### ERP Database Schema:

1.  `products`
- `product_id` (Primary Key)
- `name`
- `description`
- `category`
- `price`
- `stock`
2. `suppliers`
- `supplier_id` (Primary Key)
- `name`
- `contact_name`
- `email`
- `phone`
- `address`
- `city`
- `state`
- `country`
- `zip_code`
3. `purchase_orders`
- `purchase_order_id` (Primary Key)
- `supplier_id` (Foreign Key)
- `created_at`
- `status`
4. `purchase_order_items`
- `purchase_order_item_id` (Primary Key)
- `purchase_order_id` (Foreign Key)
- `product_id` (Foreign Key)
- `quantity`
- `price`
5. `inventory`
- `inventory_id` (Primary Key)
- `product_id` (Foreign Key)
- `warehouse_id` (Foreign Key)
- `quantity`
6. `warehouses`
- `warehouse_id` (Primary Key)
- `name`
- `location`
- `capacity`
7. `invoices`
- `invoice_id` (Primary Key)
- `account_id` (Foreign Key)
- `created_at`
- `due_date`
- `total_amount`
- `status`
8. `invoice_items`
- `invoice_item_id` (Primary Key)
- `invoice_id` (Foreign Key)
- `product_id` (Foreign Key)
- `quantity`
- `price`

These database schemas are simplified representations of CRM and ERP systems, and they can be expanded or modified according to specific business requirements. Note that some additional tables and fields might be needed for advanced features like sales management, project management, human resources, or production planning. Proper indexing and optimization are crucial for better performance and data management.