Designing a database for the Sales Management System requires creating tables to store the relevant data and establishing relationships between them. Here is a simplified database schema for the system:

1. `customers`
- `customer_id` (Primary Key)
- `first_name`
- `last_name`
- `email`
- `phone`
- `company`
- `industry`
- `address`
- `city`
- `state`
- `country`
- `zip_code`
2. `leads`
- `lead_id` (Primary Key)
- `customer_id` (Foreign Key)
- `source`
- `status`
- `created_at`
- `updated_at`
3. `opportunities`
- `opportunity_id` (Primary Key)
- `lead_id` (Foreign Key)
- `sales_rep_id` (Foreign Key)
- `stage`
- `probability`
- `expected_close_date`
- `deal_value`
4. `sales_reps`
- `sales_rep_id` (Primary Key)
- `first_name`
- `last_name`
- `email`
- `phone`
- `territory_id` (Foreign Key)
5. `territories`
- `territory_id` (Primary Key)
- `name`
- `region`
6. `tasks`
- `task_id` (Primary Key)
- `sales_rep_id` (Foreign Key)
- `opportunity_id` (Foreign Key)
- `type`
- `description`
- `due_date`
- `status`
7. `quotes`
- `quote_id` (Primary Key)
- `opportunity_id` (Foreign Key)
- `created_at`
- `valid_until`
- `status`
8. `quote_items`
- `quote_item_id` (Primary Key)
- `quote_id` (Foreign Key)
- `product_id` (Foreign Key)
- `quantity`
- `price`
- `discount`
9. `products`
`product_id` (Primary Key)
- `name`
- `description`
- `price`
- `category`
- `stock`
10. `orders`
- `order_id` (Primary Key)
- `quote_id` (Foreign Key)
- `customer_id` (Foreign Key)
- `created_at`
- `status`
11. `order_items`
- `order_item_id` (Primary Key)
- `order_id` (Foreign Key)
- `product_id` (Foreign Key)
- `quantity`
- `price`
- `discount`
12. `commissions`
- `commission_id` (Primary Key)
- `sales_rep_id` (Foreign Key)
- `order_id` (Foreign Key)
- `amount`
- `payment_status`

This database schema is a simplified representation of the Sales Management System and can be expanded or modified according to specific business needs. Note that some additional tables and fields may be required for advanced features like AI and ML integration, marketing automation, and social selling. It is also essential to ensure proper indexing and optimization for better performance and data management.