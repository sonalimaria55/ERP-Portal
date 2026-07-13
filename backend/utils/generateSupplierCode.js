const Supplier = require("../models/Supplier");


const generateSupplierCode = async () => {

    const lastSupplier = await Supplier
        .findOne()
        .sort({ createdAt: -1 });


    let number = 1;


    if (lastSupplier && lastSupplier.supplierCode) {

        const lastNumber = parseInt(
            lastSupplier.supplierCode.replace("SUP", "")
        );

        number = lastNumber + 1;
    }


    return (
        "SUP" +
        String(number).padStart(6, "0")
    );

};


module.exports = generateSupplierCode;