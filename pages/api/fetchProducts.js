import products from "./products.json"

export default function handler(req, res) {
  // If get request
  if (req.method === "GET") {
    // Create a copy of products without the hashes and filenames
    const productsNoHashes = products.map((product) => {

      const { hash, filename, ...rest } = product;
      console.log(product.filename, " :fetchProduct")
      return rest;
    });

    res.status(200).json(productsNoHashes);
  }
  else {
    res.status(405).send(`Method ${req.method} not allowed`);
  }
}
