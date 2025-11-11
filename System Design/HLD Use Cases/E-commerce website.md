
Online shopping websites that allows user to purchase mobiles, laptops, cameras, books and so on

1. Functional Requirement 
	- user should be able to search and find products based on product based on product title or name 
	- user should be able to view the details of the product (description, image, available, quantity, review)
	- user should be able to place the selected product along with quantity into the cart 
	- user should be able to make the payment and do the checkout.
	- user should be able to  check the status of order 
	- manage purchase of item having limited stock 
	
2. Non - Functional Requirement
	- Scale : 10 order / sec, 10M DAU 
	- Low Latency : Searching 
	- CAP Theorem : Highly available with respect to searching and viewing the items. Highly consistent with respect to placing the order.
	
3. Identify core entity
	- User 
	- Product 
	- Cart 
	- Order 
	- Checkout 
	
4. API Designing![](Image/API%20design%20of%20e-com.png)
5. HLD ![](Image/hld%20for%20e-com.png)
6. LLD ![](Image/lld%20for%20e-com.png)