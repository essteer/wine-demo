import Button from "@/components/Button";
import ButtonLogin from "@/components/ButtonLogin";
import ButtonRegister from "@/components/ButtonRegister";

export default function User() {
    return (
        <main>
            <div className="grid h-screen place-items-center">
                <div>
                    <p>WELCOME TO</p>
                    <h1 className="font-bold text-3xl text-white">WINE APP</h1>
                    <p>LOG IN OR REGISTER TO CONTINUE</p>
                    <div className="gap-4 columns-2">
                        <ButtonLogin />
                        <ButtonRegister />
                    </div>
                </div>
            </div>
        </main>
    );
}