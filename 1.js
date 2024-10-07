import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basepath = "C:\\Users\\ARPON\\Documents\\web\\demo\\exp\\"


let files = await fs.readdir(basepath);

for(let item of files)
{
   console.log("Ruuning for",item)
   let ext = item.split(".")[item.split(".").length -1];
   if(ext != "js" && ext !="json" && item.split(".").length >1)
   {
    if (fsn.existsSync(path.join(basepath,ext)))
    {
      fs.remove(path.join(basepath,item), path.join(basepath,ext,item))
    }
    else{
      fs.mkdir(ext)
      fs.rename(path.join(basepath,item),path.join(basepath,ext,item))
    }
   }
  
}

