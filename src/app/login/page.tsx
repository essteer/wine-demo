import ButtonLogin from "@/components/ButtonLogin";
import ButtonRegister from "@/components/ButtonRegister";

export default function User() {
    return (
        <main>
            <div className="grid h-screen place-items-center text-center">
                <div className="bg-slate-800 px-4 py-8">
                    <div className="grid">
                        <p className="text-sm">WELCOME TO</p>
                        <h1 className="font-bold text-4xl">"WINE APP"</h1>
                    </div>
                    <div className="grid mt-4 text-left">
                        <p className="text-sm">LOG IN OR REGISTER TO CONTINUE</p>
                        <div className="mt-2 py-1 bg-stone-200">
                            <p className="px-1 text-black">Email</p>
                        </div>
                        <div className="mt-2 py-1 bg-stone-200">
                            <p className="px-1 text-black">Password</p>
                        </div>
                    </div>
                    <div className="gap-4 columns-2 mt-4">
                        <ButtonLogin />
                        <ButtonRegister />
                    </div>
                </div>
            </div>
        </main>
    );
}