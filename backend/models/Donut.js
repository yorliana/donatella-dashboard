

import mongoose from "mongoose";

const donutSchema = new mongoose.Schema({
  nombre: {
     type: String, 
     required: true 
    },

  telefono: { 
    type: Number, 
    required: true 

  },
  
});

export default mongoose.model("Donut", donutSchema);


