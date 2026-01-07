export const search = (container: HTMLDivElement) => {
   container.insertAdjacentHTML("beforeend", `
         <section class="container-title-search line-spacing">
               <h1><img src="images/coin.png" alt="Icon coin" width="32px">Deashboard criptomoedas</h1>               <div class="container-search line-spacing">
               <input type="text" placeholder="Pesquise uma criptomoedas" id="ipn-search"> 
               <button></button>
            </div>
         </section>   
      `);
}


