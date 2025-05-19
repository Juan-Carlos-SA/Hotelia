import * as YUP from "yup";

export function initialValues(){
    return{
        nombre: "",
        precio: "",
        cantidad: "",
        unidad: "",
        imagep: "",
    }
}

export function validationSchema(){
    return YUP.object({
        nombre:YUP.string(),
        precio: YUP.number(),
        cantidad: YUP.string(),
        unidad: YUP.string(),
        imagep: YUP.string()
    })
}