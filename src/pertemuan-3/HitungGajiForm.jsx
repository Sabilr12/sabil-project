import { useState } from "react";
import InputGaji from "./components/InputGaji";
export default function HitungGaji() {
  const [nama, setNama] = useState("");
  const [gaji, setGaji] = useState("");
  const pajak = 0.11;
  const totalGaji = gaji ? gaji - gaji * pajak : 0;
  const isValid = gaji > 0;

  return (
    <div className="flex flex-col items-center justify-center m-5 p-5 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">
          Hitung Gaji Bersih
        </h2>

        <InputGaji
          label="Gaji Pokok"
          type="number"
          placeholder="Masukkan jumlah gaji"
          value={gaji}
          onChange={(e) => setGaji(parseFloat(e.target.value) || "")}
        />

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            {" "}
            Pajak: <b className="text-red-500">11%</b>
          </label>{" "}
        </div>

        <div className="mt-4">
          {" "}
          <div
            className={`p-3 bg-red-100 border border-red-500 text-red-700 ${
              isValid ? "hidden" : ""
            }`}
          >
            <p className="font-semibold">
              Silakan masukkan gaji yang valid (tidak boleh kosong atau
              negatif).
            </p>
          </div>
          <div
            className={`p-3 bg-blue-100 border-l-4 border-blue-500 text-blue-700 ${
              !isValid ? "hidden" : ""
            }`}
          >
            <p className="font-semibold break-words">
              Total Take Home Pay (THP): Rp {totalGaji.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
