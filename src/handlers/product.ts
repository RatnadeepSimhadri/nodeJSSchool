import prisma from "../db"

/**
 * 
 * @param req Get All Products
 * @param res 
 */
export const getProducts = async (req, res) => {
    
    const user = await prisma.user.findUnique({
        where: {
            id: req.user.id
        }, 
        include: {
            products: true
        }
    }); 

    res.json({data: user.products})

}

/**
 * Get a Product by ID
 * @param req 
 * @param res 
 */
export const getProduct  = async (req, res) => {
    const { id } = req.params;
    const product = await prisma.product.findFirst({
        where: {
            id : id,
            belongsToId: req.user.id
        }
    });

    res.json({data: product})

}

/**
 * 
 * @param req Create a Product
 * @param res 
 */
export const createProduct = async (req, res) => {
    const product = await prisma.product.create({
        data: {
            name: req.body.name,
            belongsToId: req.user.id

        }
    })

    res.json({data: product})
}

/**
 * Update Information of a Specific Product
 * @param req 
 * @param res 
 */
export const updateProduct = async (req, res) => {
    const update = await prisma.product.update({
        where: {
            id : req.params.id
        }, 
        data: {
            name: req.body.name
        }
    }); 

    res.json({data: update})
}

/**
 * 
 * @param req Delete a Product
 * @param res 
 */
export const deleteProduct = async (req,res) => {
    const product = await prisma.product.delete({
        where : {
            id_belongsToId: {
                id: req.params.id,
                belongsToId: req.user.id
            }
        }
    });

    res.json({ data: product})
}
