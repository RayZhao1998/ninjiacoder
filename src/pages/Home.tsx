import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { ReactSVG } from "react-svg";

export default function Home() {
  return (
    <div className="absolute grid grid-rows-5 grid-cols-12 gap-4 text-white w-8/12 h-3/6 min-w-[50%] max-h-[32rem] left-[16.7%] top-[16.7%]">
      <div
        className="row-span-2 col-span-4 relative flex flex-col justify-center rounded-lg border border-white/20 transition ease-in-out hover:scale-[1.03] p-8"
        style={{
          background:
            "linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%)",
        }}
      >
        <p className="z-10 text-xl font-bold">iOS/Frontend Developer</p>
        <p className="text-lg font-light text-white/60">
          Working at{" "}
          <span className="font-semibold text-[#FFD100]">Meituan</span>
        </p>
      </div>
      <div
        className="flex flex-col justify-center row-span-4 col-span-3 rounded-lg border border-white/20 p-8 transition ease-in-out hover:scale-[1.03]"
        style={{
          background:
            "linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%)",
        }}
      >
        <img src="avatar.png" className="w-32 h-32 rounded-full bg-white/10" />
        <p className="text-3xl mt-4 font-bold">Ray Zhao</p>
        <p className="text-white/60 mt-1">aka ninjiacoder</p>
      </div>
      <div
        className="row-span-4 col-span-5 rounded-lg border border-white/20 p-8 transition ease-in-out hover:scale-[1.03]"
        style={{
          background:
            "linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%)",
        }}
      >
        <span
          className="text-2xl font-bold"
          style={{
            background:
              "linear-gradient(90deg, rgb(255, 102, 86) 0%, rgb(255, 135, 178) 100%)",
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
          }}
        >
          Skills
        </span>
        <div className="overflow-hidden relative h-[8rem] mt-5 rounded border border-white/20">
          <div className="absolute grid grid-cols-7 grid-rows-3 gap-1 w-[32rem] auto-cols-auto rotate-[-12deg] -translate-y-12">
            {new Array(6).fill(1).map((_, index) => {
              return (
                <>
                  <img
                    src="https://developer.apple.com/assets/elements/icons/swift/swift-64x64_2x.png"
                    className="w-16 h-16 bg-white/10 rounded border border-white/10"
                  />
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
                    className="w-16 h-16 bg-white/10 rounded border border-white/10"
                  />
                  <div className="w-16 h-16 bg-[#3178c6] rounded border border-white/10">
                    <ReactSVG
                      src="typescript.svg"
                      style={{
                        transform: "scale(2) translateX(18px) translateY(9px)",
                      }}
                    />
                  </div>
                  <img
                    src="https://developer.apple.com/assets/elements/icons/swiftui/swiftui-96x96_2x.png"
                    className="w-16 h-16 bg-white/10 rounded border border-white/10"
                  />
                </>
              );
            })}
          </div>
        </div>
        <div className="flex mt-5 space-x-[4rem]">
          <div className="space-y-3">
            <span className="font-semibold text-white/50">Languages</span>
            <ul className="list-disc list-inside">
              <li className="font-bold">Swift</li>
              <li className="text-white/60">Objective-C</li>
              <li className="font-bold">TypeScript</li>
              <li className="text-white/60">JavaScript</li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="font-semibold text-white/50">Frameworks</p>
            <ul className="list-disc list-inside">
              <li className="text-white/60">UIKit</li>
              <li className="font-bold">SwiftUI</li>
              <li className="text-white/60">React</li>
              <li className="font-bold">React Native</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="row-span-2 col-span-4 relative flex justify-center items-center rounded-lg border border-white/20 transition ease-in-out hover:scale-[1.03]"
        style={{
          background:
            "linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%)",
        }}
      >
        <p className="z-10 text-xl font-bold">WWDC 2019 Scholarship Winner</p>
        <img
          src="wwdc2019.png"
          className="absolute top-0 object-cover w-full h-full blur-[1px]"
        />
      </div>
      <div
        className="row-span-1 col-span-4 relative flex flex-col justify-center rounded-lg border border-white/20 transition ease-in-out hover:scale-[1.03] p-8"
        style={{
          background:
            "linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%)",
        }}
      >
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faEnvelope} fontSize={18} />
          <p className="font-bold text-xl">Mail</p>
        </div>
        <p className="text-sm text-white/50">ninjiacoder@gmail.com</p>
      </div>
      <div
        className="row-span-1 col-span-4 relative flex flex-col justify-center rounded-lg border border-white/20 transition ease-in-out hover:scale-[1.03] p-8"
        style={{
          background:
            "linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%)",
        }}
      >
        <div className="flex items-center space-x-2">
          <ReactSVG
            src="github.svg"
            width={18}
            height={18}
            className="w-4 h-4"
          />
          <p className="font-bold text-xl">Github</p>
        </div>
        <p className="text-sm text-white/50">@RayZhao1998</p>
      </div>
      <div
        className="row-span-1 col-span-4 relative flex flex-col justify-center rounded-lg border border-white/20 transition ease-in-out hover:scale-[1.03] p-8"
        style={{
          background:
            "linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%)",
        }}
      >
        <div className="flex items-center space-x-2">
          <ReactSVG
            src="twitter.svg"
            width={18}
            height={18}
            className="w-4 h-4"
          />
          <p className="font-bold text-xl">Twitter</p>
        </div>
        <p className="text-sm text-white/50">@RayZhao98</p>
      </div>
    </div>
  );
}
