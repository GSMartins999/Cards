import { useState } from "react";
import ProductCard from "./Componentes/ProductCard/ProductCard";

function App() {

  const [cart, setCart] = useState([] )

const itens = [
  {
    "id": "94313731",
    "name": "I7 3770/SSD 480GB/16GB.. " ,
    "price": 2000,
    "infoTech": "Ficha tecnica",
    "image": "https://encurtador.com.br/norH3"
  },
  {
    "id": "94313762",
    "name": "Notebook HP i3,SSD 240GB..",
    "price": 1200,
    "infoTech": "Ficha tecnica",
    "image": "https://encurtador.com.br/bgmvQ"
  },
  { 
    "id": "943137XQ",
    "name": "OCEX - Ryzen 7900x",
    "price": 10000,
    "infoTech": "Ficha tecnica",
    "image": "https://images.tcdn.com.br/img/img_prod/1103247/computador_gamer_ocex_ryzen_5800x3d_rtx_3080_32gb_ddr4_m_2_lian_li_13_1_946536580d38bdbfb34219b4b62139ac.jpg"
  },
  {
    "id": "95077714",
    "name": "Headset Gamer Motospeed G750",
    "price": 199.99,
    "infoTech": "Ficha tecnica",
    "image": "https://encurtador.com.br/qxAD2"
  },
  {
    "id": "9507779N",
    "name": "Headset Gamer Bluetooth",
    "price": 179.99,
    "infoTech": "Ficha tecnica",
    "image": "https://encurtador.com.br/ayY12"
  },
  {
    "id": "92601102",
    "name": "Teclado gamer HyperX",
    "price": 99.99,
    "infoTech": "Ficha tecnica",
    "image": "https://images.tcdn.com.br/img/img_prod/1068604/teclado_mecanico_motospeed_ck61_essential_branco_switch_azul_rgb_327_1_6d58451b00fbee2061b5fea8c26707f2.jpeg"
  },
  {
    "id": "9465450R",
    "name": "Razer Barracuda X",
    "price": 279.99,
    "infoTech": "Ficha tecnica",
    "image": "https://www.tradeinn.com/f/13869/138698975/razer-headset-gaming-barracuda-x.jpg"
  },
  {
    "id": "95004531",
    "name": "i5,1TB, 32GB RAM..",
    "price": 2.599,
    "infoTech": "Ficha tecnica",
    "image": "https://cdn.awsli.com.br/2500x2500/141/141286/produto/37976916/546496c347.jpg"
  },
  {
    "id": "94672705",
    "name": "Intel Core i5 8GB HD 500GB",
    "price": 1779.99,
    "infoTech": "Ficha tecnica",
    "image": "https://a-static.mlcdn.com.br/450x450/pc-gamer-facil-barato-completo-intel-core-i5-8gb-hd-500gb-geforce-2gb-monitor-19-kit-gamer-teclado-mouse-headset-facil-computadores/2eletroinfo/15202224080/31bceca4a30a55ef04b82f0e8a8b4629.jpeg"
  },
  {
    "id": "92456602",
    "name": "Headset Gamer",
    "price": 139.99,
    "infoTech": "Ficha tecnica",
    "image": "https://images.prismic.io/skullcandy/21fc3895-9433-4921-ac65-f43df6e8523f_2000x2000_SLYR+%282%29.png?auto=compress,format"
  },
  {
    "id": "94461431",
    "name": "Mouse Gamer Sem Fio Alienware",
    "price": 89.99,
    "infoTech": "Ficha tecnica",
    "image": "https://encurtador.com.br/ciEGL"
  },
  {
    "id": "95850662",
    "name": "Mouse óptico BENGOO",
    "price": 199.99,
    "infoTech": "Ficha tecnica",
    "image": "https://m.media-amazon.com/images/I/61lCLrCtuhL.jpg"
  },
  {
    "id": "943137X8",
    "name": "Cadeira Gamer",
    "price": 569.99,
    "infoTech": "Ficha tecnica",
    "image": "https://encurtador.com.br/tvwL7"
  },
  {
    "id": "93227802",
    "name": "Teclado Mecânico Bright",
    "price": 159.99,
    "infoTech": "Ficha tecnica",
    "image": "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/174947"
  },
  {
    "id": "93828502",
    "name": "Controle PS5 modificado",
    "price": 180.99,
    "infoTech": "Ficha tecnica",
    "image": "https://yesgame.com.br/wp-content/uploads/2022/07/controle-ps5-ricky-and-morty1.png"
  },
  {
    "id": "943137D0",
    "name": "MousePad Gamer",
    "price": 95.99,
    "infoTech": "Ficha tecnica",
    "image": "https://encurtador.com.br/eVWXZ"
  },
  {
    "id": "95150929",
    "name": "Controle PS5 modificado",
    "price": 200.00,
    "infoTech": "Ficha tecnica",
    "image": "https://down-br.img.susercontent.com/file/32ff808e934e7e11d06396d2937a0d16"
  },
  {
    "id": "9465450M",
    "name": "Notebook LG",
    "price": 1896.99,
    "infoTech": "Ficha tecnica",
    "image": "https://encurtador.com.br/bzMV0"
  },
  {
    "id": "95870805",
    "name": "Controle de Xbox",
    "price": 198.99,
    "infoTech": "Ficha tecnica",
    "image": "https://imgs.casasbahia.com.br/55056507/1g.jpg"
  },
  {
    "id": "94876962",
    "name": "Microfone",
    "price": 52.50,
    "infoTech": "Ficha tecnica",
    "image": "https://row.hyperx.com/cdn/shop/products/hyperx_quadcast_s_white_3_back.jpg?v=1662435227"
  },
  {
    "id": "95707805",
    "name": "Controle de Xbox",
    "price": 300.00,
    "infoTech": "Ficha tecnica",
    "image": "https://cdn.awsli.com.br/600x450/679/679395/produto/209224633/11681-shqkzn.jpg"
  },
  {
    "id": "94672719",
    "name": "Plastation 5",
    "price": 3520.99,
    "infoTech": "Ficha tecnica",
    "image": "https://images-americanas.b2w.io/produtos/3529423396/imagens/console-playstation-5-ps5-2-controles-dualsense-playstation-5/3529423396_1_large.jpg"
  },
  {
    "id": "95876431",
    "name": "Xbox Series X",
    "price": 3600.00,
    "infoTech": "Ficha tecnica",
    "image": "https://encurtador.com.br/hwJT7"
  },
   {
    "id": "95707845",
    "name": "Notebook Samsung",
    "price": 1799.99,
    "infoTech": "Ficha tecnica",
    "image": "https://images.tcdn.com.br/img/img_prod/740836/notebook_samsung_essentials_e30_np350_core_i3_7020u_memoria_4gb_hd_1tb_ssd_480gb_tela_15_6_fhd_siste_7383_1_c98487ed8edd965dd13b68f9293771bf.jpg"
  },
  {
    "id": "946545OX",
    "name": "Notebook Dell",
    "price": 2279.99,
    "infoTech": "Ficha tecnica",
    "image": "https://encurtador.com.br/hjrv3"
  },
  {
    "id": "95939145",
    "name": "Fone de Ouvido Gamer",
    "price": 69.99,
    "infoTech": "Ficha tecnica",
    "image": "https://www.wb.com.br/upload/produto/imagem/13-WBFOTWBITSRB-1.webp"
  },
  {
    "id": "95326905",
    "name": "Volante",
    "price": 525.99,
    "infoTech": "Ficha tecnica",
    "image": "https://www.syma.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/v/o/volante-gamer-logitech-g29.jpg_4.jpg"
  },
  {
    "id": "951509X8",
    "name": "Fone de Ouvido Gamer",
    "price": 85.99,
    "infoTech": "Ficha tecnica",
    "image": "https://m.media-amazon.com/images/I/41vw+ILr5DL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    "id": "9515093X",
    "name": "Volante",
    "price": 609.99,
    "infoTech": "Ficha tecnica",
    "image": "https://121e2bad95.cbaul-cdnwnd.com/a4fed8c2acdc51120220b7a7a62186f2/system_preview_detail_200000000-46cbe47c64/download.jpg"
  },
  {
    "id": "9590484W",
    "name": "Mochila para notebook",
    "price": 129.99,
    "infoTech": "Ficha tecnica",
    "image": "https://dafushop.com.br/cdn/shop/files/BF24D3B63B75469EB1DA7C84CCA6FCE6.jpg?v=1692800602"
  },
  {
    "id": "9465459P",
    "name": "MousePad Gamer",
    "price": 89.99,
    "infoTech": "Ficha tecnica",
    "image": "https://m.media-amazon.com/images/I/61kFJkhFZXL._AC_UF894,1000_QL80_.jpg"
  },
  {
    "id": "95707858",
    "name": "Microfone",
    "price": 299.99,
    "infoTech": "Ficha tecnica",
    "image": "https://nissei.com/media/catalog/product/cache/16a9529cefd63504739dab4fc3414065/6/3/63472.1.jpg"
  },
  {
    "id": "94218131",
    "name": "MousePad Gamer",
    "price": 139.99,
    "infoTech": "Ficha tecnica",
    "image": "https://m.media-amazon.com/images/I/51tUuGl-qkL._AC_UF894,1000_QL80_.jpg"
  }
]


const nome = "Giovanni";

  return (
    <div className="App">
      <ProductCard itens={itens} nome={nome}/>
    </div>
  );
}

export default App;
