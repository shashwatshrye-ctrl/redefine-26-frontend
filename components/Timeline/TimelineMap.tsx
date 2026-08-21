"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function TimelineMap() {

  const handleNav = (target: string) => {
    console.log(`Navigating to ${target}`);
    if (target === "register") {
      alert("Registration opens on 24th August 2026!");
    } else {
      // Scroll to target element if present
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-full w-full bg-black overflow-hidden">
      {/* Main SVG Container */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 1024"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="h-full w-full select-none"
      >
        {/* Black Background */}
        <rect width="1841" height="1024" fill="black" />

        {/* --- Background Collage Cards (Static) --- */}
        {/* Pink/Red cards behind center */}
        <rect x="283.004" y="157" width="180" height="97" transform="rotate(3.5489 283.004 157)" fill="#D04C6B" />
        <rect x="65" y="137" width="243" height="166" fill="#DF6989" />
        
        {/* Lined paper card at top-left (Card 1) lines */}
        <line x1="86.9975" y1="189.485" x2="285.998" y2="188.5" stroke="black" />
        <line x1="86.9975" y1="250.485" x2="285.998" y2="249.5" stroke="black" />
        <line x1="86.9975" y1="235.485" x2="285.998" y2="234.5" stroke="black" />
        <line x1="86.9975" y1="220.485" x2="285.998" y2="219.5" stroke="black" />
        <line x1="86.9975" y1="205.485" x2="285.998" y2="204.5" stroke="black" />
        
        {/* Other scattered background cards */}
        <rect x="227" y="265.543" width="159.314" height="116.173" transform="rotate(-9.95565 227 265.543)" fill="#DF6989" />
        <rect x="65" y="526.496" width="211.118" height="125.224" transform="rotate(-0.405977 65 526.496)" fill="#EB9DB3" />
        <rect x="871.504" y="676.27" width="122.427" height="61.5102" transform="rotate(21.7086 871.504 676.27)" fill="#E486A1" />
        <rect x="38" y="658.154" width="173.975" height="116.86" transform="rotate(-2.02715 38 658.154)" fill="#EB9DB3" />
        <rect x="38" y="829.629" width="76.1501" height="64.2526" transform="rotate(-3.48526 38 829.629)" fill="#ED9BB2" />
        <rect x="101" y="784.072" width="90.1694" height="85.6176" transform="rotate(-7.05312 101 784.072)" fill="#B5304B" />
        <rect x="28" y="883.627" width="116.851" height="66.0974" transform="rotate(-4.7257 28 883.627)" fill="#D04C6B" />
        <rect x="251.483" y="888" width="152.532" height="106.132" transform="rotate(0.800635 251.483 888)" fill="#DF6989" />
        <rect x="527" y="909.33" width="136.427" height="84.2628" transform="rotate(-4.34259 527 909.33)" fill="#EB9DB3" />
        <rect x="498.121" y="782" width="223.038" height="140.808" transform="rotate(0.0493893 498.121 782)" fill="#E486A1" />
        <rect x="727.346" y="723" width="302.117" height="214.982" transform="rotate(4.09355 727.346 723)" fill="#EB9DB3" />
        <rect x="498" y="708.693" width="130.671" height="78.4784" transform="rotate(-3.37527 498 708.693)" fill="#ED9BB2" />
        
        {/* Card lines */}
        <line x1="514.971" y1="741.764" x2="621.017" y2="735.501" stroke="black" />
        <line x1="515.971" y1="769.764" x2="622.017" y2="763.501" stroke="black" />
        <line x1="514.971" y1="755.764" x2="621.017" y2="749.501" stroke="black" />
        <line x1="52.9835" y1="693.534" x2="195.981" y2="688.466" stroke="black" />
        <line x1="53.9823" y1="709.569" x2="196.98" y2="704.501" stroke="black" />
        <line x1="53.9823" y1="725.569" x2="196.98" y2="720.501" stroke="black" />
        <line x1="54.9811" y1="741.603" x2="197.979" y2="736.535" stroke="black" />
        
        {/* Right and top cards */}
        <rect x="1020.58" y="742" width="92.655" height="73.9201" transform="rotate(3.5489 1020.58 742)" fill="#B5304B" />
        <rect x="1053.26" y="887" width="138.915" height="101.054" transform="rotate(3.5489 1053.26 887)" fill="#D04C6B" />
        <rect x="500.255" y="171" width="138.915" height="101.054" transform="rotate(3.5489 500.255 171)" fill="#DF6989" />
        <rect x="1217.46" y="852" width="172.47" height="120.513" transform="rotate(3.5489 1217.46 852)" fill="#EB9DB3" />
        <rect x="1004.02" y="949" width="57.0076" height="48.8218" transform="rotate(1.19496 1004.02 949)" fill="#E486A1" />
        <rect x="1294.68" y="653" width="145.308" height="119.637" transform="rotate(4.64022 1294.68 653)" fill="#EB9DB3" />
        <rect x="1250" y="516.118" width="169.86" height="172.805" transform="rotate(-1.38933 1250 516.118)" fill="#ED9BB2" />
        
        {/* Lined card lines */}
        <line x1="1265.99" y1="563.686" x2="1404.98" y2="560.314" stroke="black" />
        <line x1="1265.99" y1="577.873" x2="1404.98" y2="574.5" stroke="black" />
        <line x1="1265.99" y1="589.873" x2="1404.98" y2="586.5" stroke="black" />
        <line x1="1265.99" y1="604.059" x2="1404.98" y2="600.686" stroke="black" />
        <line x1="1266.99" y1="616.873" x2="1405.98" y2="613.5" stroke="black" />
        <line x1="1266.99" y1="631.059" x2="1405.98" y2="627.686" stroke="black" />
        <line x1="1266.99" y1="643.059" x2="1405.98" y2="639.686" stroke="black" />
        <line x1="1266.99" y1="657.245" x2="1405.98" y2="653.873" stroke="black" />
        
        <rect x="1223.63" y="364" width="203.74" height="143.079" transform="rotate(1.45493 1223.63 364)" fill="#B5304B" />
        <rect x="1229.32" y="126" width="157.616" height="279.78" transform="rotate(3.5489 1229.32 126)" fill="#D04C6B" />
        <rect x="401.195" y="138" width="157.616" height="245.483" transform="rotate(3.5489 401.195 138)" fill="#ED9BB2" />
        
        {/* Card lines */}
        <line x1="1245.03" y1="173.501" x2="1363.95" y2="180.879" stroke="black" />
        <line x1="1244.03" y1="186.501" x2="1362.95" y2="193.879" stroke="black" />
        <line x1="1243.03" y1="197.501" x2="1361.95" y2="204.879" stroke="black" />
        <line x1="1242.03" y1="210.501" x2="1360.95" y2="217.879" stroke="black" />
        <line x1="1242.03" y1="225.501" x2="1360.95" y2="232.879" stroke="black" />
        <line x1="1241.03" y1="238.501" x2="1359.95" y2="245.879" stroke="black" />
        <line x1="1240.03" y1="249.501" x2="1358.95" y2="256.879" stroke="black" />
        <line x1="1239.03" y1="262.501" x2="1357.95" y2="269.879" stroke="black" />
        <line x1="1239.03" y1="275.501" x2="1357.95" y2="282.879" stroke="black" />
        <line x1="1238.03" y1="288.501" x2="1356.95" y2="295.879" stroke="black" />
        <line x1="1237.03" y1="299.501" x2="1355.95" y2="306.879" stroke="black" />
        <line x1="1236.03" y1="312.501" x2="1354.95" y2="319.879" stroke="black" />
        <line x1="1235.03" y1="327.501" x2="1353.95" y2="334.879" stroke="black" />
        <line x1="1235.03" y1="340.501" x2="1353.95" y2="347.879" stroke="black" />
        <line x1="1234.03" y1="351.501" x2="1352.95" y2="358.879" stroke="black" />
        <line x1="1233.03" y1="364.501" x2="1351.95" y2="371.879" stroke="black" />
        
        <rect x="1114" y="157.272" width="162.811" height="106.264" transform="rotate(-2.91232 1114 157.272)" fill="#DF6989" />
        <rect x="1097" y="192.211" width="70.798" height="67.6738" transform="rotate(-0.171269 1097 192.211)" fill="#EB9DB3" />
        <rect x="853" y="150.33" width="271.826" height="179.138" transform="rotate(-0.701898 853 150.33)" fill="#E486A1" />
        
        {/* Card lines */}
        <line x1="872.975" y1="196.323" x2="1104.01" y2="193.5" stroke="black" />
        <line x1="872.994" y1="213.323" x2="1104.03" y2="210.5" stroke="black" />
        <line x1="872.994" y1="230.323" x2="1104.03" y2="227.5" stroke="black" />
        <line x1="873.012" y1="247.323" x2="1104.05" y2="244.5" stroke="black" />
        <line x1="872.994" y1="264.323" x2="1104.03" y2="261.5" stroke="black" />
        <line x1="873.012" y1="281.323" x2="1104.05" y2="278.5" stroke="black" />
        <line x1="873.012" y1="298.323" x2="1104.05" y2="295.5" stroke="black" />
        
        <line x1="745.103" y1="772.501" x2="996.968" y2="790.511" stroke="black" />
        <line x1="744.036" y1="788.501" x2="995.9" y2="806.511" stroke="black" />
        <line x1="743.103" y1="802.501" x2="994.968" y2="820.511" stroke="black" />
        <line x1="742.036" y1="818.506" x2="993.9" y2="836.516" stroke="black" />
        <line x1="741.103" y1="834.501" x2="992.968" y2="852.511" stroke="black" />
        <line x1="740.036" y1="850.501" x2="991.9" y2="868.511" stroke="black" />
        <line x1="739.103" y1="864.501" x2="990.968" y2="882.511" stroke="black" />
        <line x1="737.968" y1="894.501" x2="989.832" y2="912.511" stroke="black" />
        <line x1="737.036" y1="908.501" x2="988.9" y2="926.511" stroke="black" />
        <line x1="738.036" y1="880.506" x2="989.9" y2="898.516" stroke="black" />

        <rect x="787.236" y="129" width="96.208" height="165.362" transform="rotate(3.5489 787.236 129)" fill="#EB9DB3" />

        {/* --- Background Pushpins (Static circles not belonging to Phase Note Cards) --- */}
        <circle cx="170.5" cy="547.5" r="8.5" fill="black" />
        <circle cx="226.5" cy="150.5" r="8.5" fill="black" />
        <circle cx="353.5" cy="243.5" r="8.5" fill="black" />
        <circle cx="353.33" cy="175.978" r="8.5" fill="black" />
        <circle cx="523.377" cy="165.5" r="8.5" fill="black" />
        <circle cx="829.5" cy="149.5" r="8.5" fill="black" />
        <circle cx="506.5" cy="735.5" r="8.5" fill="black" />
        <circle cx="121.5" cy="662.5" r="8.5" fill="black" />
        <circle cx="149.5" cy="787.5" r="8.5" fill="black" />
        <circle cx="80.5" cy="840.5" r="8.5" fill="black" />
        <circle cx="88.5" cy="890.5" r="8.5" fill="black" />
        <circle cx="565.5" cy="718.5" r="8.5" fill="black" />
        <circle cx="615.5" cy="795.5" r="8.5" fill="black" />
        <circle cx="873.5" cy="752.5" r="8.5" fill="black" />
        <circle cx="878.5" cy="695.5" r="8.5" fill="black" />
        <circle cx="1069.5" cy="757.5" r="8.5" fill="black" />
        <circle cx="1031.5" cy="961.5" r="8.5" fill="black" />
        <circle cx="1069.5" cy="901.5" r="8.5" fill="black" />
        <circle cx="1370.5" cy="671.5" r="8.5" fill="black" />
        <circle cx="1266.5" cy="530.5" r="8.5" fill="black" />
        <circle cx="1395.5" cy="382.5" r="8.5" fill="black" />
        <circle cx="1206.5" cy="279.5" r="8.5" fill="black" />
        <circle cx="1132.5" cy="205.5" r="8.5" fill="black" />
        <circle cx="1313.5" cy="146.5" r="8.5" fill="black" />
        
        <line x1="45.9683" y1="858.501" x2="108.968" y2="854.501" stroke="black" />
        <line x1="46.9683" y1="877.501" x2="109.968" y2="873.501" stroke="black" />
        <line x1="46.9683" y1="868.501" x2="109.968" y2="864.501" stroke="black" />
        
        <circle cx="1192.5" cy="169.5" r="8.5" fill="black" />
        <circle cx="995.5" cy="165.5" r="8.5" fill="black" />
        
        <line x1="410.031" y1="191.501" x2="537.883" y2="199.433" stroke="black" />
        <line x1="409.031" y1="206.501" x2="536.883" y2="214.433" stroke="black" />
        <line x1="408.031" y1="219.501" x2="535.883" y2="227.433" stroke="black" />
        <line x1="407.031" y1="234.501" x2="534.883" y2="242.433" stroke="black" />
        <line x1="406.031" y1="247.501" x2="533.883" y2="255.433" stroke="black" />
        <line x1="405.031" y1="262.501" x2="532.883" y2="270.433" stroke="black" />
        <line x1="404.031" y1="275.501" x2="531.883" y2="283.433" stroke="black" />
        <line x1="403.031" y1="290.501" x2="530.883" y2="298.433" stroke="black" />
        <line x1="402.031" y1="303.501" x2="529.883" y2="311.433" stroke="black" />
        <line x1="401.031" y1="316.501" x2="528.883" y2="324.433" stroke="black" />
        <line x1="400.031" y1="331.501" x2="527.883" y2="339.433" stroke="black" />
        <line x1="399.031" y1="344.501" x2="526.883" y2="352.433" stroke="black" />
        <line x1="398.031" y1="359.501" x2="525.883" y2="367.433" stroke="black" />
        
        <line x1="254.914" y1="343.824" x2="387.689" y2="320.508" stroke="black" />
        <line x1="257.914" y1="356.824" x2="390.689" y2="333.508" stroke="black" />
        <line x1="245.026" y1="293.166" x2="377.801" y2="269.849" stroke="black" />
        <line x1="248.026" y1="306.166" x2="380.801" y2="282.849" stroke="black" />
        <line x1="250.026" y1="319.166" x2="382.801" y2="295.849" stroke="black" />
        <line x1="253.026" y1="332.166" x2="385.801" y2="308.849" stroke="black" />
        
        <line x1="266.005" y1="919.634" x2="390.009" y2="921.366" stroke="black" />
        <line x1="266.007" y1="932.5" x2="390.011" y2="934.232" stroke="black" />
        <line x1="266.007" y1="943.5" x2="390.011" y2="945.232" stroke="black" />
        <line x1="266.009" y1="956.366" x2="390.013" y2="958.097" stroke="black" />
        <line x1="266.007" y1="967.5" x2="390.011" y2="969.232" stroke="black" />


        {/* --- Connecting String Paths (Animated) --- */}
        <g stroke="white" strokeWidth="2" strokeLinecap="round">
          {/* Segment 1: Phase 5 to Phase 1 */}
          <motion.path
            d="M218.314 569.662C214.863 569.662 207.928 569.188 199.673 566.8C195.852 565.695 193.543 563.924 191.221 561.128C186.828 555.838 182.78 548.748 179.553 542.416C176.757 536.93 175.465 531.385 174.628 525.122C174.157 521.597 174.028 506.286 174.025 500.311C174.021 509.605 174.258 506.286 175.684 500.311C177.11 494.335 179.717 485.803 184.141 475.6C188.565 465.398 194.728 453.784 198.139 446.972C203.395 436.477 202.276 432.978 200.725 426.821C200.053 424.156 198.689 422.316 197.02 420.703C196.064 419.779 194.404 419.209 189.937 418.784C185.47 418.358 178.122 418.24 173.271 418.356C168.419 418.473 166.286 418.829 164.088 418.477"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <motion.path
            d="M121.205 240.551C118.301 242.648 115.397 244.745 108.497 250.584C101.597 256.424 90.7887 265.941 78.7679 277.459C66.7472 288.976 53.8417 302.204 44.5316 313.455C35.2216 324.706 29.898 333.578 25.9457 340.73C21.9934 347.882 19.5736 353.044 17.6818 358.204C15.7899 363.364 14.4994 368.364 13.9152 374.006C12.702 385.722 14.3039 395.642 16.0881 403.197C18.1115 411.764 21.9543 418.628 24.5574 422.942C26.2141 425.687 30.4113 427.28 38.7657 429.473C44.0171 430.851 51.4757 432.149 57.4763 432.574C67.8089 433.307 76.6757 430.399 83.6784 428.444C89.8983 426.707 95.6087 426.801 99.8421 426.234C102.892 425.825 106.031 425.012 112.379 424.034C119.396 423.545 125.575 422.89 129.581 422.079C130.801 421.913 132.575 421.913 134.403 421.913"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
          />
          <motion.path
            d="M134.403 421.913C135.86 421.751 139.439 421.101 142.215 420.854C147.242 420.408 154.759 420.124 158.095 419.552C159.476 419.469 161.573 419.469 162.896 419.227C164.218 418.985 164.702 418.501 166.178 417.513"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.path
            d="M136.339 230.838C136.728 230.838 141.012 227.337 160.814 217.366C175.995 209.721 203.758 201.56 222.063 195.973C240.367 190.386 248.924 188.831 261.695 188.029C274.466 187.228 291.191 187.228 306.711 188.395C322.231 189.561 336.039 191.895 352.196 195.82C368.352 199.745 386.439 205.19 399.451 208.579C412.464 211.968 419.854 213.135 425.995 213.736C436.768 214.79 444.918 213.948 454.012 212.581C478.911 207.666 485.6 205.308 488.735 203.157C490.314 201.784 491.87 199.839 493.473 197.836"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }}
          />
          <motion.path
            d="M490.49 201.543C491.648 199.887 494.152 197.045 496.026 195.38C499.295 192.475 501.988 191.206 504.487 190.165C505.472 189.755 506.971 189.294 522.928 186.851C538.884 184.408 569.265 180.033 587.847 177.737C606.429 175.442 612.291 175.359 618.778 175.73C625.265 176.1 632.2 176.926 636.68 177.557C641.161 178.189 642.977 178.602 645.349 179.027"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.0, ease: "easeInOut", delay: 1.3 }}
          />

          {/* Segment 2: Phase 1 to Phase 2 */}
          <motion.path
            d="M645.349 179.027C648.987 179.937 656.182 181.278 657.727 181.527C660.49 181.973 663.522 181.944 664.899 182.07C666.696 182.235 669.681 182.774 671.862 183.071C672.281 183.112 672.693 183.195 674.846 183.237C676.999 183.28 680.879 183.28 684.877 183.28"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 1.7 }}
          />
          <motion.path
            d="M704.196 181.343C706.405 182.192 708.614 183.042 720.458 189.002C732.301 194.962 753.711 206.008 781.054 217.39C808.396 228.772 841.022 240.157 866.92 247.552C892.818 254.946 911 258.005 928.098 259.75C945.196 261.496 960.659 261.836 971.089 261.331C986.541 260.583 993.733 257.047 997.844 254.992C1004.29 251.77 1007.98 245.914 1009.8 240.582C1011.34 236.067 1008.87 231.646 1007.5 229.419C1006.27 227.432 1003.9 225.297 1000.39 222.897C992.822 217.718 986.045 221.157 982.27 222.359C977.908 223.749 975.746 227.665 974.191 232.56C972.813 236.898 976.066 241.918 978.98 244.923C981.369 247.057 983.45 248.793 984.819 249.735C985.509 250.167 986.189 250.507 986.889 250.857"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 2.0 }}
          />
          <motion.path
            d="M986.889 250.857C988.589 251.877 998.13 255.971 1013.3 261.802C1028.51 267.65 1033.89 266.81 1044.35 268.36C1049.94 269.188 1057.38 269.91 1063 270.337C1066.86 270.631 1072 270.939 1079.7 271.537C1090.24 272.354 1098.1 272.654 1101.18 272.997C1111.45 274.141 1117.66 274.544 1124.69 275.399C1129.17 275.744 1145.86 276.089 1156.37 275.234C1157.49 275.059 1158.68 275.059 1161.45 274.544"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 2.5 }}
          />
          <motion.path
            d="M1161.45 274.544C1163.32 274.374 1177.3 274.029 1186.32 273.601C1190.07 273.514 1193.19 273.684 1194.91 274.111C1195.77 274.369 1196.62 274.709 1199.04 275.574"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 3.0 }}
          />
          <motion.path
            d="M1214.44 282.261C1215.26 282.363 1216.08 282.465 1229.3 288.2C1242.52 293.935 1268.11 305.298 1284.58 313.149C1301.04 320.999 1307.59 324.992 1311.42 327.253C1316.12 330.024 1320.61 333.52 1326.35 338.943C1328.66 341.13 1329.52 342.42 1330.87 344.896C1332.21 347.372 1333.95 351.057 1336.64 358.484C1339.33 365.911 1342.91 376.967 1345.37 385.786C1347.83 394.604 1349.06 400.849 1349.74 404.68C1350.74 411.415 1351.15 412.759 1351.46 413.79C1351.57 414.31 1351.57 414.822 1351.57 415.349"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 3.3 }}
          />

          {/* Segment 3: Phase 2 to Phase 3 */}
          <motion.path
            d="M1351.57 415.349C1351.67 418.442 1352.08 421.131 1352.24 423.097C1352.48 426.09 1352.29 429.818 1351.21 431.217C1350.85 431.58 1350.44 431.989 1350.02 432.303C1349.61 432.616 1349.2 432.821 1348.15 433.652"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 4.0 }}
          />
          <motion.path
            d="M1349.53 431.925C1349.36 432.099 1348.57 433.497 1346.59 436.7C1345.4 438.644 1343.49 441.036 1338.62 446.175C1333.75 451.313 1325.91 459.074 1319.68 466.037C1313.75 473 1309.1 478.93 1305.89 483.99C1302.69 489.051 1300.77 493.062 1299 497.832C1297.22 502.601 1295.65 508.008 1294.71 513.496C1293.78 518.985 1293.51 524.391 1293.51 528.223C1293.5 534.153 1294.73 538.397 1296.4 542.832C1298.28 547.832 1300.72 551.443 1302.74 553.684C1304.97 556.159 1308.99 557.962 1313.25 559.722C1315.21 560.531 1316.91 560.784 1323.47 561.225C1330.04 561.667 1341.46 562.19 1348.56 562.765C1355.67 563.339 1358.11 563.95 1360.11 564.7C1366.25 568.965 1368.73 573.204 1369.04 575.307C1369.17 576.713 1369.26 578.806 1369.35 580.962"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.0, ease: "easeInOut", delay: 4.3 }}
          />
          <motion.path
            d="M1369.61 579.707C1369.61 582.782 1369.79 585.594 1371.67 593.099C1373.58 600.697 1375.6 606.121 1376.08 608.23C1376.58 610.41 1377.62 613.248 1379.77 619.467C1381.31 623.949 1384.79 630.744 1386.71 635.078C1389.3 640.918 1390.13 644.691 1390.92 650.653C1391.43 654.504 1391.54 660.102 1391.54 664.242C1391.55 668.381 1391.29 670.91 1390.72 673.695C1390.14 676.48 1389.27 679.445 1387.69 682.237C1386.11 685.029 1383.84 687.558 1381.19 689.907C1378.54 692.256 1375.57 694.349 1371.34 696.779C1367.11 699.209 1361.71 701.912 1357.83 703.653C1351.78 706.092 1346.91 707.16 1341.9 707.688C1339.51 707.868 1337.42 707.868 1335.26 707.868"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 5.5 }}
          />

          {/* Segment 4: Phase 3 to Phase 4 */}
          <motion.path
            d="M1336.28 707.28C1335.86 707.28 1335.44 707.28 1326.84 707.531C1318.25 707.783 1301.49 708.285 1292.39 708.67C1283.3 709.055 1282.37 709.306 1280.43 709.687C1278.49 710.068 1275.56 710.571 1273.29 711.04C1271.03 711.508 1269.52 711.927 1264.51 712.855C1259.5 713.783 1251.04 715.208 1246.05 716.152C1239.77 717.339 1237.75 718.03 1235.77 718.408C1230.47 719.421 1226.68 721.151 1224.08 722.597C1222.17 723.659 1220.99 725.473 1219.84 726.829C1218.66 728.234 1218.28 730.887 1217.77 733.255C1216.81 737.736 1217.43 739.438 1217.6 740.918C1217.66 741.498 1218.1 741.644 1218.52 741.731C1219.45 741.817 1220.3 741.901 1220.98 742.07C1221.32 742.155 1221.65 742.239 1222.76 742.325"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 6.5 }}
          />
          <motion.path
            d="M1238.69 742.486C1241.81 742.725 1244.71 743.688 1250.93 749.42C1253.29 751.596 1254.05 753.9 1254.65 756.146C1255.32 758.63 1254.62 760.503 1253.98 761.425C1253.12 762.662 1249.82 765.154 1244.96 768.528C1242.77 770.05 1240.97 770.947 1237.01 772.474C1233.04 774.002 1226.9 776.073 1205.51 779.728C1184.11 783.384 1147.63 788.561 1116.41 795.489C1085.2 802.417 1060.35 810.939 1044.4 816.882C1028.45 822.825 1022.16 825.932 1015.68 829.132"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 7.2 }}
          />

          {/* Segment 5: Phase 4 to Phase 5 */}
          <motion.path
            d="M1016.48 828.234C1016.18 828.234 1015.88 828.234 1009.57 829.996C1003.27 831.759 990.973 835.283 969.116 838.823C947.26 842.363 916.216 845.812 894.751 847.364C873.285 848.916 862.337 848.466 853.286 847.41C844.234 846.353 837.411 844.704 830.38 843.004"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 8.0 }}
          />
          <motion.path
            d="M831.8 842.55C831.35 842.55 828.419 842.1 822.567 840.856C819.387 840.18 815.89 838.937 811.488 837.608C807.085 836.278 801.911 834.779 798.609 833.744C795.306 832.709 794.031 832.184 781.002 829.664C767.973 827.144 743.228 822.645 727.369 820.252C711.51 817.859 711.51 817.859 705.287 817.71C699.269 817.97C693.251 818.23 687.627 818.905 680.98 820.265C674.334 821.625 666.836 823.649 660.611 825.592C654.386 827.535 649.662 829.334 641.455 833.186C633.248 837.037 621.7 842.886 615.376 846.161C609.053 849.437 608.303 849.962 606.304 850.907C604.306 851.852 601.082 853.202 597.846 854.347C594.61 855.492 591.461 856.392 588.676 856.931C583.615 857.909 580.273 857.699 577.972 857.135C576.571 856.647 574.696 855.747 573.206 854.871C571.715 853.995 570.666 853.17 569.129 851.639"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.0, ease: "easeInOut", delay: 8.8 }}
          />
          <motion.path
            d="M497.662 734.738C496.895 736.579 495.502 739.675 493.8 743.964C492.195 748.009 492.086 751.078 491.469 754.465C490.994 757.07 490.545 761.533 490.306 766.241C490.068 770.949 490.145 775.781 490.299 779.037C490.454 782.294 490.684 783.828 491.953 787.84C493.222 791.852 495.523 798.295 497.131 802.343C498.738 806.39 499.582 807.848 501.742 810.209C503.903 812.571 507.354 815.792 509.708 817.912C514.858 822.552 517.026 823.523 519.91 825.448C522.212 826.983 526.4 829.367 530.029 831.283C536.54 834.721 540.269 836 541.505 836.424C544.449 837.436 546.231 838.399 547.746 838.944C549.558 839.596 550.959 839.873 555.518 841.149C559.204 842.18 560.568 842.741 562.002 843.514C562.66 843.977 563.206 844.445 563.708 844.908C563.98 845.142 564.287 845.372 564.835 845.609"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 9.3 }}
          />
          <motion.path
            d="M564.835 845.609C565.375 846.381 566.611 847.464 567.776 848.24C568.629 849.402 569.328 850.332 569.483 850.95C569.561 851.262 569.637 851.569 569.716 851.885"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 10.0 }}
          />
          <motion.path
            d="M512.522 729.354C513.158 730.085 514.055 731.175 514.423 731.749C514.92 732.525 515.334 733.856 515.733 735.101C516.208 736.585 516.262 737.791 516.231 738.285C516.185 739.004 515.786 740.088 515.069 741.475C514.683 742.222 514.068 742.956 513.332 743.727C512.595 744.498 511.709 745.258 510.367 746.187C509.024 747.116 507.252 748.192 505.88 748.936C504.509 749.68 503.591 750.06 501.552 750.62C499.512 751.179 496.38 751.907 494.006 752.361C491.633 752.815 490.114 752.973 487.037 752.912C483.96 752.912 479.372 752.567 474.714 751.55C470.056 750.533 465.467 748.792 460.74 746.999"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 10.3 }}
          />
          <motion.path
            d="M461.791 746.883C458.828 745.698 455.866 744.513 442.192 738.985C428.519 733.456 404.225 723.62 379.564 712.035C354.902 700.45 330.608 687.415 310.153 674.537C289.698 661.659 273.818 649.334 261.312 638.008C248.806 626.682 240.155 616.727 234.158 608.814C228.161 600.901 225.08 595.331 222.959 590.862C219.399 583.359 218.436 577.527 218.195 572.277C217.911 566.08 219.503 560.882 221.352 557.478C223.148 554.171 228.333 549.882 234.372 544.799C237.989 541.754 240.331 540.994 242.24 540.933C246.788 540.788 249.542 544.094 252.182 546.789C255.383 550.058 252.2 558.925 249.686 562.708C248.099 565.096 243.832 566.832 240.351 568.461C239.035 569.116 237.121 569.957 232.242 570.675C228.667 570.919 222.86 570.919 216.878 570.919"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.0, ease: "easeInOut", delay: 10.8 }}
          />
        </g>

        {/* Center large "TIMELINE" Text (replaced by optimized TIMELINE.svg) */}
        <image x="437.5" y="457.5" width="565" height="109" href="/REDEFINE-2026/TIMELINE.svg" />

        {/* --- Interactive Note Cards (Phases 01 - 05) --- */}
        {/* Phase 01 Card */}
        <motion.g
          whileHover={{ scale: 1.04, rotate: 1.5, zIndex: 50 }}
          whileTap={{ scale: 0.98 }}
          className="cursor-pointer origin-[694px_232px]"
        >
          <rect x="583.121" y="162" width="223.038" height="140.808" transform="rotate(0.0493893 583.121 162)" fill="#FAC2CF" />
          <circle cx="694.5" cy="175" r="8.5" fill="black" />
          <image x="639" y="209" width="111" height="26" href="/REDEFINE-2026/Phase 01.svg" />
          <image x="600" y="245" width="186" height="27" href="/REDEFINE-2026/XX Aug 2026- YY Aug 2026.svg" />
        </motion.g>

        {/* Phase 02 Card */}
        <motion.g
          whileHover={{ scale: 1.04, rotate: 2, zIndex: 50 }}
          whileTap={{ scale: 0.98 }}
          className="cursor-pointer origin-[1206px_327px]"
        >
          <rect x="1088.96" y="255" width="235.062" height="144.683" transform="rotate(3.5489 1088.96 255)" fill="#FAC2CF" />
          <circle cx="1206.5" cy="279.5" r="8.5" fill="black" />
          <image x="1150" y="295" width="111" height="26" href="/REDEFINE-2026/Phase 02.svg" />
          <image x="1114" y="331" width="186" height="27" href="/REDEFINE-2026/XX Aug 2026- YY Aug 2026.svg" />
        </motion.g>

        {/* Phase 03 Card */}
        <motion.g
          whileHover={{ scale: 1.04, rotate: -2, zIndex: 50 }}
          whileTap={{ scale: 0.98 }}
          className="cursor-pointer origin-[1226px_817px]"
        >
          <rect x="1090" y="727.33" width="271.826" height="179.138" transform="rotate(-0.701898 1090 727.33)" fill="#FAC2CF" />
          <circle cx="1230.5" cy="741.5" r="8.5" fill="black" />
          <image x="1170" y="770" width="111" height="26" href="/REDEFINE-2026/Phase 03.svg" />
          <image x="1133" y="806" width="186" height="27" href="/REDEFINE-2026/XX Aug 2026- YY Aug 2026.svg" />
        </motion.g>

        {/* Phase 04 Card */}
        <motion.g
          whileHover={{ scale: 1.04, rotate: 1.5, zIndex: 50 }}
          // whileTap={{ scale: 0.98 }}
          className="cursor-pointer origin-[350px_798px]"
        >
          <rect x="180.088" y="701" width="340.737" height="195.283" transform="rotate(3.5489 180.088 701)" fill="#FAC2CF" />
          <circle cx="350.5" cy="718.5" r="8.5" fill="black" />
          <image x="295" y="745" width="111" height="26" href="/REDEFINE-2026/Phase 04.svg" />
          <image x="257" y="781" width="186" height="27" href="/REDEFINE-2026/XX Aug 2026- YY Aug 2026.svg" />
        </motion.g>

        {/* Phase 05 Card */}
        <motion.g
          whileHover={{ scale: 1.04, rotate: -3, zIndex: 50 }}
          whileTap={{ scale: 0.98 }}
          className="cursor-pointer origin-[125px_373px]"
        >
          <rect x="22" y="224.542" width="207" height="298" transform="rotate(-1.81099 22 224.542)" fill="#FAC2CF" />
          <circle cx="129.5" cy="238.5" r="8.5" fill="black" />
          <image x="70" y="325" width="111" height="26" href="/REDEFINE-2026/Phase 05.svg" />
          <image x="33" y="361" width="186" height="27" href="/REDEFINE-2026/XX Aug 2026- YY Aug 2026.svg" />
        </motion.g>


        {/* --- Header Navigation Links & Logo (Interactive) --- */}
        {/* Left REDEFINE Logo */}
        <g className="cursor-pointer" onClick={() => handleNav("home")}>
          <image x="35" y="8" width="115" height="112" href="/REDEFINE-2026/image 6.svg" />
        </g>

        {/* TIMELINE Nav Link */}
        <motion.g
          whileHover={{ scale: 1.08 }}
          className="cursor-pointer"
          onClick={() => handleNav("timeline-section")}
        >
          <image x="337" y="56" width="121" height="17" href="/REDEFINE-2026/TIMELINE-1.svg" />
          {/* White underline doodle under Timeline */}
          <motion.path
            d="M337 87.8255C337.243 87.8255 337.487 87.8255 343.696 87.0955C349.905 86.3654 362.073 84.9053 374.273 85.0048C386.473 85.1044 398.336 86.8079 406.212 88.2026C414.088 89.5972 417.617 90.6315 420.225 91.5902C426.471 93.8853 426.903 95.0745 427.394 95.6258C427.871 96.1611 427.583 97.2223 427.216 98.2953C426.834 99.4136 425.561 100.113 424.151 100.665C420.896 101.941 418.122 101.101 417.477 100.551C416.698 99.8851 416.827 98.6456 417.162 97.5136C417.717 95.6372 419.464 94.2836 420.964 93.089C422.893 91.5517 426.209 90.1079 429.769 88.6653C431.307 88.0417 432.354 87.7702 434.499 87.431C436.644 87.0918 439.869 86.7268 443.172 86.5387C446.476 86.3507 449.761 86.3507 453.146 86.3507"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.0, delay: 0.5 }}
          />
        </motion.g>

        {/* TRACKS Nav Link */}
        <motion.g
          whileHover={{ scale: 1.08 }}
          className="cursor-pointer"
          onClick={() => handleNav("tracks")}
        >
          <image x="576" y="56" width="109" height="17" href="/REDEFINE-2026/TRACKS.svg" />
        </motion.g>

        {/* TEAM UP Nav Link */}
        <motion.g
          whileHover={{ scale: 1.08 }}
          className="cursor-pointer"
          onClick={() => handleNav("teamup")}
        >
          <image x="803" y="56" width="118" height="17" href="/REDEFINE-2026/TEAM UP.svg" />
        </motion.g>

        {/* FAQ Nav Link */}
        <motion.g
          whileHover={{ scale: 1.08 }}
          className="cursor-pointer"
          onClick={() => handleNav("faq")}
        >
          <image x="1020" y="55" width="54" height="20" href="/REDEFINE-2026/FAQ.svg" />
        </motion.g>

        {/* REGISTER Button */}
        <motion.g
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="cursor-pointer"
          onClick={() => handleNav("register")}
        >
          {/* Drop shadow filter group for Register */}
          <g filter="url(#filter0_d_838_279)">
            <rect x="1186" y="33" width="193" height="61" rx="19" fill="black" />
          </g>
          <image x="1230" y="48" width="105" height="27" href="/REDEFINE-2026/REGISTER.svg" className="brightness-200" />
        </motion.g>

        {/* SVG Filter Declarations */}
        <defs>
          <filter id="filter0_d_838_279" x="1186" y="33" width="199" height="67" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dx="5" dy="5" />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.980392 0 0 0 0 0.760784 0 0 0 0 0.811765 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_838_279" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_838_279" result="shape" />
          </filter>
        </defs>
      </svg>

      {/* Modal removed */}
    </div>
  );
}
