const CategoryDB = require('../model/CategoryDB');
const SubcategoryDB = require('../model/SubcategoryDB')

module.exports.addProduct = (req,res)=>{
    CategoryDB.find({},(err,data)=>{
        if(err)
        {
            console.log('Something Wrong');
        }
        return res.render('add_product',{
            caData : data
        });

    })
}

module.exports.subCategoryDataFound = (req,res)=>{
    
}