class Person:
    def __init__(self, first_name, last_name, age, gender, email, phone, address):
        self.first_name = first_name
        self.last_name = last_name
        self.age = age
        self.gender = gender
        self.email = email
        self.phone = phone
        self.address = address

    def __str__(self):
        return f"Person({self.first_name} {self.last_name}, Age: {self.age}, Gender: {self.gender}, Email: {self.email}, Phone: {self.phone}, Address: {self.address})"

# Example usage
person = Person(
    first_name="John",
    last_name="Doe",
    age=30,
    gender="Male",
    email="john.doe@example.com",
    phone="+1234567890",
    address="1234 Main St, Anytown, Anystate, 12345"
)

print(person)
Uber Price Class
Here's an example of a class to calculate the Uber price:

python
Copy code
class Uber:
    def __init__(self, base_fare, cost_per_km, cost_per_min, surge_multiplier=1.0):
        self.base_fare = base_fare
        self.cost_per_km = cost_per_km
        self.cost_per_min = cost_per_min
        self.surge_multiplier = surge_multiplier

    def calculate_fare(self, distance_km, ride_time_min):
        total_fare = (self.base_fare + (self.cost_per_km * distance_km) + (self.cost_per_min * ride_time_min)) * self.surge_multiplier
        return round(total_fare, 2)

# Example usage
uber = Uber(base_fare=2.50, cost_per_km=1.20, cost_per_min=0.25, surge_multiplier=1.5)
fare = uber.calculate_fare(distance_km=10, ride_time_min=15)

print(f"Total fare: ${fare}")