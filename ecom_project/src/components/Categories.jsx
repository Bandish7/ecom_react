import CategoryItem from "./CategoryItem";
import productData from "../data/productData";
import CategoriesLink from "./CategoriesLink";


function Categories(props) {
    
    return (

        <section aria-labelledby="category-heading" className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
            <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
                <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">{props.title}</h2>
                <CategoriesLink linkText={props.linkText} linkUrl={props.linkUrl}/>


            </div>

            <div className="mt-4 flow-root">
                <div className="-my-2">
                    <div className="relative box-content overflow-x-auto py-2 xl:overflow-visible">
                        <div className="flex flex-wrap gap-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-8 xl:space-x-0 xl:px-0">
                           {
                            productData.categories.map(item =>(
                                <CategoryItem key={item.id} slug={item.id} category={item.category} image={item.image} />

                            ))
                           }
                            </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 px-4 sm:hidden">
            <CategoriesLink isMobile={true} linkText={props.linkText} linkUrl={props.linkUrl}/>
            </div>
        </section>
    );
}
export default Categories;