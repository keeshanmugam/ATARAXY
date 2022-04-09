import React from "react";
import "./aroma.css";
import img1 from "./aroma1.jpg";
import img2 from "./aroma2.jpg";
import img3 from "./aroma3.jpg";
import img4 from "./aroma4.jpg";
import img5 from "./aroma5.jpg";
import img6 from "./aroma6.jpg";
import img7 from "./aroma7.jpg";
import img8 from "./aroma8.jpg";
import img9 from "./aroma9.jpg";
export default function Aromatherapy(){
    return(
        <div className="Aroma_head">
        <h1>Aromatherapy Products</h1>
        <center><table>
            <tr>
                <td><a href="https://www.amazon.in/dp/B01N17AXR6/ref=cm_sw_r_wa_apa_glt_i_ZEEPXWP8AGVR3RXEDYQR"><img src={img1}/></a></td>
                <td><a href="https://www.amazon.in/dp/B08WK7N9F1/ref=cm_sw_r_apan_glt_i_6WHSCKXNQ6XMV215TPFY"><img src={img2}/></a></td>
                <td><a href="https://www.amazon.in/dp/B082MDMPTV/ref=cm_sw_r_apan_glt_i_dl_NE5CCNFB40Y0KCHN9FPG"><img src={img3}/></a></td>
            </tr>
            <tr>
                <td><a href="https://www.amazon.in/dp/B076CM897K/ref=cm_sw_r_apan_glt_i_VCF1VFBZZYCK1WASA5P3"><img src={img4}/></a></td>
                <td><a href="https://www.amazon.in/dp/B073CNW428/ref=cm_sw_r_wa_apa_glt_i_dl_1VTKS448FJ5B12GHNP79?_encoding=UTF8&psc=1"><img src={img5}/></a></td>
                <td><a href="https://www.amazon.in/dp/B00PUO98OU/ref=cm_sw_r_apan_glt_i_dl_78ZW3APX4PFQ55H5GV00?_encoding=UTF8&psc=1"><img src={img6}/></a></td>
            </tr>
            <tr>
                <td><a href="https://www.amazon.in/dp/B01N9VB7JR/ref=cm_sw_r_apan_glt_i_SPRC64643X7NYZ125692"><img src={img7}/></a></td>
                <td><a href="https://www.amazon.in/dp/B09NQFMNDF/ref=cm_sw_r_apan_glt_i_7FH6TASQJPJBA8979YZ2"><img src={img8}/></a></td>
                <td><a href="https://www.amazon.in/dp/B00PCD2GFM/ref=cm_sw_r_apan_glt_i_64PT1P63YV1BB3BRJGF7"><img src={img9}/></a></td>
            </tr>
        </table></center>
        </div>
    );
}