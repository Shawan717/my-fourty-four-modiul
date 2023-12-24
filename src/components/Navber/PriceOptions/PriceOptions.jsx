import PriceOption from "../../PriceOption/PriceOption";


const PriceOptions = () => {

    const PriceOptions =[
        {
            "id":1,
          "name": "Basic Membership",
          "price": 29.99,
          "features": [
            "Access to cardio equipment",
            "Strength training area",
            "Locker room access",
            "Group fitness classes (limited)",
            "Online workout tutorials",
            "Discounts on fitness apparel"
          ]
        },
        {
            "id":2,
          "name": "Premium Membership",
          "price": 49.99,
          "features": [
            "Unlimited access to all equipment",
            "Full access to group fitness classes",
            "Personalized fitness assessment",
            "Sauna and steam room access",
            "Towel service",
            "Nutritional guidance",
            "Guest passes (2 per month)"
          ]
        },
        {
            "id":3,
          "name": "Executive Membership",
          "price": 79.99,
          "features": [
            "All Premium Membership features",
            "Access to exclusive executive lounge",
            "Personal trainer sessions (2 sessions/month)",
            "Nutritional consultation",
            "Priority class registration",
            "Complimentary protein shakes",
            "Discounts on personal training packages"
          ]
        }
      ]

    return (
        <div className="mx-auto">
               <h2 className="text-4xl mt-8">Best Price </h2>
           <div className="grid grid-cols-3 gap-5 m-10">
           {
               PriceOptions.map(option =><PriceOption key={option.id} option={option}></PriceOption>)
            }
           </div>
        </div>
    );
};

export default PriceOptions;