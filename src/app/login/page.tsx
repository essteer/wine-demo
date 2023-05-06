import Button from "@/components/Button";

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
                        <input className="mt-2 p-1" type="email" placeholder="Email"></input>
                        <input className="mt-2 p-1" type="password" placeholder="Password"></input>
                    </div>
                    <div className="gap-4 columns-2 mt-4">
                        <Button color="btnLogin" name="login" />
                        <Button color="btnRegister" name="register" />
                    </div>
                </div>
            </div>
        </main>
    );
}