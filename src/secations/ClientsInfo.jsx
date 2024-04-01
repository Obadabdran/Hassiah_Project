

const ClientsInfo=()=>{

    
    const data = [
        { id: 1, name: 'Investor 1' },
        { id: 2, name: 'Investor 2' },
        { id: 3, name: 'Investor 3' },
        { id: 4, name: 'Investor 4' },
        // Add more data as needed
      ];
    return(
        <div className="container mx-auto mt-8 text-center ">
             <label className="block  text-gray-600 font-bold text-2xl  text-center mb-12 w-full py-2 rounded-lg">معلومات المستثمرين </label>
         
        <div className="container mx-auto mt-8 flex justify-center">
      <table className="w-[80%] bg-white divide-y divide-gray-300 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-blue-400 text-white">
            <th className="py-2 px-4">رقم التسلسل</th>
            <th className="py-2 px-4">اسم المستثمر</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-100' }>
              <td className="py-2 px-4">{item.name}</td>
              <td className="py-2 px-4">{item.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        
      </div>
    )
}
export default ClientsInfo