import { PortableText } from "@portabletext/react";
import Form from "../components/form/Form";

export default function ZgodbeBorcev() {

  // Convert string to a Portable Text compatible format (block array)
  const portableText = [
    {
      _type: "block",
      children: [
        {
          _type: "span",
          text,
        },
      ],
    },
  ];

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="flex flex-col items-center justify-center space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Tvoja zgodba
        </h1>
      </div>
      <div className="w-full">
        {/* Ensuring the PortableText is wrapped in a div with justified text */}
        <div className="mt-10 prose prose-purple prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary w-full max-w-none">
          <div className="text-justify">
            <PortableText value={portableText} />
          </div>
        </div>
        <div className="max-w-[700px] mx-auto mt-8">
          <Form />
        </div>
      </div>
    </div>
  );
}

// The plain text content
export const text = `Pri Projektu Onko smo z namenom ozaveščanja o raku februarja 2022 na socialnih omrežjih začeli serijo objav, kjer delimo osebne zgodbe posameznikov, ki so se v življenju pobliže srečali s to boleznijo. Objavimo jih s prizadevanjem, da bi čim več ljudi spoznalo, s čim se spopada oseba, ki zboli za rakom, prav tako pa si želimo, da bi zgodbe hkrati komu vlile upanje in voljo, da se bori naprej. 
Tudi vas vabimo, da z nami skozi zgodbo delite svojo osebno izkušnjo, če:

1) se trenutno soočate z rakom,
2) ste raka že preboleli ali
3) raka preboleva oz. je že prebolel kdo izmed vaših bližnjih.

Vsebinsko imate pri zgodbi popolnoma prosto pot, po želji pa lahko besedilu priložite tudi fotografije. Vključite lahko svoja občutja ob spopadanju z boleznijo, opišete, kako je izkušnja vplivala na vas, lahko pa dodate tudi kakšen motivacijski stavek; v spodbudo vsem, ki se trenutno borijo z rakom. V objavi bo uporabljeno samo vase ime, razen če v zgodbi posebej omenite tudi svoj priimek.

Zgodbo oddajte v spodnji okvirček z odkljukanim dovoljenjem za objavo. Po  želji lahko priložite tudi svoje fotografije.`;