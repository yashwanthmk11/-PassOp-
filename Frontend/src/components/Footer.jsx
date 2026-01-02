import React from "react";

const Footer = () => {
    const moveTo = () => {
        window.open("https://personal-portfolio-t4e2.vercel.app/", "_blank");
    }
  return (
    <div>
      <footer className="fixed bottom-0 left-0 w-full z-50">
        {/* subtle glow line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

        <div className="backdrop-blur-md bg-black/50 border-t border-violet-500/20 py-4">
          <p className="text-center text-sm text-gray-300 font-bold">
            &lt;Pass
            <span className="text-violet-500 font-semibold font-bold">Op</span>
            /&gt; · Created with <span className="text-red-500">❤</span> by{" "}
            <span onClick={moveTo} className="text-violet-400 cursor-pointer">Yashwanth</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
