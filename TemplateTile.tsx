import Link from "next/link";
import type { InviteTemplate } from "@/lib/templates";
const looks: Record<string,string> = {
  rose:"from-rose-100 via-pink-50 to-orange-100 text-rose-700",
  night:"from-slate-950 via-stone-900 to-amber-950 text-amber-200",
  cream:"from-amber-50 via-orange-50 to-stone-100 text-stone-700",
  blue:"from-sky-100 via-cyan-50 to-blue-100 text-sky-800"
};
export default function TemplateTile({item}:{item:InviteTemplate}) {
 return <article className="overflow-hidden rounded-[26px] border border-stone-200 bg-white shadow-sm">
  <div className={`relative flex h-56 flex-col items-center justify-center bg-gradient-to-br ${looks[item.theme]}`}>
   <span className="serif text-6xl">{item.symbol}</span><span className="serif mt-3 text-3xl">Приглашение</span><span className="mt-2 text-xs tracking-[.25em]">НА ОСОБЕННЫЙ ДЕНЬ</span>
   {item.tag && <span className="absolute right-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-stone-700">{item.tag}</span>}
  </div>
  <div className="p-5"><div className="text-xs font-semibold uppercase tracking-wider text-rose-500">{item.category}</div><h3 className="serif mt-2 text-2xl">{item.title}</h3><p className="mt-2 min-h-10 text-sm leading-6 text-stone-500">{item.description}</p>
   <div className="mt-5 flex items-center justify-between"><b>{item.price.toLocaleString("ru-RU")} ₽</b><Link className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-rose-600" href={`/editor?template=${item.id}`}>Выбрать</Link></div>
  </div>
 </article>;
}
