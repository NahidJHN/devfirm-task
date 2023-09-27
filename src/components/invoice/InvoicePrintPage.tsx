import React from "react";

const InvoicePrintPage = () => {
  return (
    <div className="bg-white rounded-lg p-5">
      {/* header */}
      <header className="border-b py-3 flex justify-between items-center">
        <div>
          <h2>
            Invoice No #<span className="text-gray-400 font-bold">I909112</span>
          </h2>
          <p>
            Date : <span className="text-gray-400">07/09/2022</span>
          </p>
        </div>
        <div>
          <h2 className="text-gray-400 text-2xl font-bold">LOGO</h2>
        </div>
        <div className="text-gray-400">
          <p>1474 Avenue Kwame</p>
          <p>NKRUMAH 10 BP 13395</p>
          <p>10 Ouagadougou, Burkina Faso</p>
          <p>
            <a href="mailto:finance@lizetransport.com">
              finance@lizetransport.com
            </a>
          </p>
          <p>
            <a href="tel:+1 (226) 50 272383">+1 (226) 50 272383</a>
          </p>
        </div>
      </header>

      {/* body  */}
      <section className="flex py-6 justify-between items-center border-b  text-gray-400">
        <div>
          <h4>Invoiced To:</h4>
          <p>John Doe</p>
          <p>Lize Transport Organization</p>
          <p>
            <a href="tel:+1 (226) 50 272383">+1 (226) 50 272383</a>
          </p>
        </div>
        <div>
          <p>1474 Avenue Kwame</p>
          <p>NKRUMAH 10 BP 13395</p>
          <p>10 Ouagadougou, Burkina Faso</p>
          <p>
            <a href="mailto:finance@lizetransport.com">
              finance@lizetransport.com
            </a>
          </p>
        </div>
      </section>

      <section className="overflow-x-auto w-full">
        <table className="text-left w-full capitalize">
          <thead>
            <tr>
              <th className=" py-3">Products</th>
              <th className=" py-3">Description</th>
              <th className=" py-3">Reservation </th>
              <th className=" py-3">Trip </th>
              <th className=" py-3">total</th>
            </tr>
          </thead>

          <tbody>
            <tr className="text-gray-400 border-t-[.1px] border-gray-200">
              <td className=" py-5">Falcon8X TBA/LTI</td>
              <td className=" py-5">Private jet</td>
              <td className=" py-5">R2390</td>
              <td className=" py-5">T2390</td>
              <td className=" py-5">11.500.000</td>
            </tr>
            <tr className="text-gray-400 border-t-[.1px] border-gray-200">
              <td className=" py-5">Falcon8X TBA/LTI</td>
              <td className=" py-5">Private jet</td>
              <td className=" py-5">R2390</td>
              <td className=" py-5">T2390</td>
              <td className=" py-5">11.500.000</td>
            </tr>
            <tr className="text-gray-400 border-t-[.1px] border-gray-200">
              <td className=" py-5">Falcon8X TBA/LTI</td>
              <td className=" py-5">Private jet</td>
              <td className=" py-5">R2390</td>
              <td className=" py-5">T2390</td>
              <td className=" py-5">11.500.000</td>
            </tr>
            <tr className="text-gray-400 border-t-[.1px] border-gray-200">
              <td className=" py-5">Falcon8X TBA/LTI</td>
              <td className=" py-5">Private jet</td>
              <td className=" py-5">R2390</td>
              <td className=" py-5">T2390</td>
              <td className=" py-5">11.500.000</td>
            </tr>

            <tr className="text-gray-500 border-t-[.1px] border-gray-200">
              <td></td>
              <td></td>
              <td></td>
              <td className="py-3">
                <div className="flex justify-between items-center ">
                  <h5 className="font-bold">Subtotal: </h5>
                  <p>0.00</p>
                </div>
                <div className="flex justify-between items-center">
                  <h5 className="font-bold">TVA: </h5>
                  <p>0.00</p>
                </div>
              </td>
            </tr>
            <tr className="text-gray-500 border-y-[.1px] border-gray-200">
              <td></td>
              <td></td>
              <td></td>

              <td className="py-3">
                <div className="flex justify-between items-center text-primaryColor">
                  <h5 className="font-bold">Total: </h5>
                  <p>0.00</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <footer className="text-center">
        <h2 className="text-gray-400 capitalize pt-3">name of your company</h2>
      </footer>
    </div>
  );
};

export default InvoicePrintPage;
