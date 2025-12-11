Online platform that allows user to search and book rooms based on location, date and availability.

1. **Functional Requirement** 
	- User should be able to create account in our application 
	- Search for hotel based on name, location, dates 
	- User should be able to select a hotel room based on the preference. 
	- Make the payment to confirm booking 
	- View past and future booking on profile 

2. **Non-Functional Requirement** 
	- **Scale**: 50M user, 1M hotels 
	- **CAP Theorem**: Availability >>> consistency. Application should be highly available based on searching. And system should be highly consistent based on booking. No two user should be allowed to book the same room/hotel on the same time frame.

3. **Identify core entity**
	- User 
	- Hotel 
	- Room 
	- Booking 
	
4. **API  Designing** ![](Image/api%20of%20hotel%20booking.png)
5. **High Level Design** ![](Image/hld%20of%20hotel%20booking.png)
6. **Low Level Design**![](Image/lld%20of%20hotel%20booking.png)