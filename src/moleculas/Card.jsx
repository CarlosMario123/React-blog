import { ImgSquare } from "../atomos/imgSquare";
import { TextoSm } from "../atomos/TextoSm";
export function Card({ url }) {
  return (
    <div className="flex flex-col items-center px-5 py-5 rounded-md shadow-sm w-72 bg-slate-100 shadow-black gap-y-4 hover:scale-125 hover:shadow-black hover:shadow-md">
      <ImgSquare url={url} />
      <TextoSm
        texto={
          "        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas accusamus ullam totam at aliquid blanditiis error provident beatae et. Minus maxime a sit optio autem, cum qui tempore adipisci quibusdam."
        }
      />
    </div>
  );
}
