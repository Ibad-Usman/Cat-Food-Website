import SubCard from "./SubCard";
const SubCardTemp=()=>{
    return(
        <div className="grid grid-cols-3 gap-4 pl-32 pt-10">
        <SubCard
        image="/weekly_package.png"
        title="Weekly Package"
        price="PKR 2000"/>
        <SubCard
        image="/monthly_package.png"
        title="Monthly Package"
        price="PKR 8000"/>
        <SubCard
        image="/custom_package.png"
        title="Custom Package"
        price=""/>
        </div>
    );
}
export default SubCardTemp;