import Features from "../Features/Features";


const PriceOption = ({option}) => {
    const {name,price,features}=option;
    return (
        <div className="bg-sky-200 p-10 items-center w-[450px] h-[500px]">
         <h2>
            <span className="text-7xl font-bold">{price}</span>
            <span className="text-4xl">/mon</span>
         </h2>
         <h4 className="text-3xl">{name}</h4>
       <div className="mt-5">
       {
            features.map((features , idx)=><Features key={idx} features={features}></Features>)
         }
       </div>
        </div>
    );
};

export default PriceOption;