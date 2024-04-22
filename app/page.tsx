"use client"
import Image from "next/image"
import uploadIcon from "../public/assets/images/icons/upload.svg"
import WorklistTable from "@/components/WorklistTable"
import ChatWindow from "@/components/ChatWindow"
import CollectionTable from "@/components/CollectionTable"
import axios from "axios"
export default function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  console.log("base url", baseUrl)
  console.log("base url")
  axios.interceptors.request.use(async (config) => {
    console.log("iner")
    config.baseURL = process.env.NEXT_PUBLIC_BASE_URL
    return config
  })

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <section className="header w-full h-[70px] flex items-center pl-[38px]">
        <h1 className="paragraph2">Intelligent collection management</h1>
      </section>

      <section className="flex flex-row gap-4 px-6">
        <div className=" w-[68.18%]">
          <section className="flex justify-between pt-[29px] text-purple-text">
            <p className="self-center paragraph3">Collection Worklist</p>
            <div className="flex flex-row gap-2.5">
              <p className="self-center paragraph4">BP Financial Data</p>

              <div className="btn-container relative">
                <div className="bg-primary px-[18px] py-[11px] rounded-[30px] hover:bg-purple-dark-100 cursor-pointer upload-btn">
                  <input type="file" id="fileInput" className="hidden" />
                  <label htmlFor="fileInput" className="flex flex-row gap-2 cursor-pointer ">
                    <Image src={uploadIcon} alt="Upload Icon" />
                    <p className="text-white">Upload</p>
                  </label>
                </div>
                <div className="tooltip  absolute top-full left-1/2 transform -translate-x-1/2 opacity-0  text-white py-2 px-4 rounded transition-opacity duration-300 bg-purple-dark-200  w-[120%] flex text-center mt-2 z-50">
                  Choose only .pdf, .xls files
                </div>
              </div>
            </div>
          </section>
          <section className="text-black mt-[22px]  ">
            {/* <WorklistTable /> */}
            <CollectionTable />
          </section>
        </div>
        <div className="w-[31.82%]">
          <ChatWindow />
        </div>
      </section>
    </main>
  )
}