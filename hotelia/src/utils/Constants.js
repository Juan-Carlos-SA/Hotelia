import axios from "axios";

const localH = "http://localhost:4000/api";

export const ENV = {
    BASE_API: localH,
    API_ROUTES: {
        CREATEPRODUCTO: "createProducto",
        GETPRODUCTO: "getproducto",
        DELETEPRODUCTO: "delProducto"
    }
};