import { ONKO_FACEBOOK_URL, ONKO_INSTAGRAM_URL } from "../constants";

export default async function OProjektuOnko() {
    return (
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="flex flex-col items-center justify-center space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            O našem projektu
          </h1>
        </div>
        <div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center pt-8">
          <img
            alt="Meow"
            src="https://ik.imagekit.io/via4rkmu1/ONKO%20Logo.jpg?updatedAt=1730817319077"
            height={200}
            width={200}
            className="h-48 w-48 rounded-full object-cover object-top"
          />
          <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
            Projekt Onko
          </h3>
          <p className="text-gray-500 dark:text-gray-300 text-center">
            projekt.onko@dsms.net
          </p>

          <div className="flex space-x-5 pt-6">
            <a href={ONKO_FACEBOOK_URL} target="_blank">
                <svg
                viewBox="0 0 860 1000"
                fill="currentColor"
                className="w-8 h-8 text-purple-500 hover:text-purple-600"
                >
                    <path d="M752 80c29.333 0 54.667 10.333 76 31s32 45.667 32 75v646c0 29.333-10.667 54.667-32 76s-46.667 32-76 32H590V630h114V496H590v-70c0-20 9.333-30 28-30h86V244h-96c-49.333 0-90.667 18-124 54s-50 80-50 132v66H330v134h104v310H108c-29.333 0-54.667-10.667-76-32S0 861.333 0 832V186c0-29.333 10.667-54.333 32-75s46.667-31 76-31h644" />
                </svg>
            </a>
            <a href={ONKO_INSTAGRAM_URL} target="_blank">
                <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="w-8 h-8 text-purple-500 hover:text-purple-600"
                >
                    <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
                </svg>
            </a>
            <a href="mailto:projekt.onko@dsms.net" target="_blank">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="w-8 h-8 text-purple-500 hover:text-purple-600"
              >
                <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 01194 256h648.8a7.2 7.2 0 014.4 12.9z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="prose max-w-none prose-lg pt-8 pb-7 dark:prose-invert xl:col-span-2">
          <p>
            Namen delovne skupine <strong>Projekt Onko</strong> je ozaveščanje širše javnosti o raku, o pomenu preventive in zgodnjega odkrivanja raka ter učenje ljudi samopregledovanja.
          </p>
          <p>
          S tem bi izboljšali funkcionalno pismenost javnosti, 
          spodbudili ljudi k sodelovanju pri presejalnih programih za raka in samopregledovanju,  
          poleg tega pa tudi destigmatizirali temo pogovora o raku, paliativni oskrbi in smrti.  
          </p>
        </div>
      </div>
        <div className="pt-6 mt-4">
          <div className="grid grid-cols-3 gap-4 items-start">
            {/* Text Section */}
            <div className="col-span-2 text-left text-lg text-gray-900 dark:text-gray-100">
              <p className="font-bold">Društvo študentov medicine Slovenije</p>
              <p className="italic">
                Slovenian Medical Students' International Committee Ljubljana (SloMSIC Ljubljana)
              </p>
              <p>Korytkova ulica 2</p>
              <p>1000 Ljubljana</p>
              <p>
                <a href="mailto:info@dsms.net" className="text-blue-600 dark:text-blue-400 hover:underline">
                  info@dsms.net
                </a>
              </p>
              <div className="mt-4">
                <p>
                  <strong>TRR:</strong> SI56 0201 0009 1808 332
                </p>
                <p>
                  <strong>Davčna številka SI:</strong> 31706720 (davčni zavezanec: DA)
                </p>
                <p>
                  <strong>Matična številka:</strong> 1204289000
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }