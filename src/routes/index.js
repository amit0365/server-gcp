import express from 'express';
import { exec } from 'child_process';

const execPromise = (command) => new Promise((resolve, reject) => {
    exec(command, { stdio: "inherit" }, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            reject(error);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
        resolve();
    });
});

const router = () => {
    const expressRouter = new express.Router();

    expressRouter.get('/', (_req, res) => {

        let gen_input = `npx tsx src/input_gen/generate_input.ts`;

        execPromise(gen_input)
            .then(() => res.send('Input files generated!'))
            .catch(() => res.status(500).send('There was an error in the input generation'));

        let snarkJSPath = "./node_modules/.bin/snarkjs";
        let circuitNamePrimary="twitter3sha";

        let command = ` node --max-old-space-size=614400 ${snarkJSPath} groth16 fullprove src/proof_gen/${circuitNamePrimary}_input.json 
        src/proof_gen/${circuitNamePrimary}.wasm src/proof_gen/${circuitNamePrimary}.zkey src/proof_gen/${circuitNamePrimary}_proof.json src/proof_gen/${circuitNamePrimary}_public.json`;

        execPromise(command)
            .then(() => res.send('Proof files generated!'))
            .catch(() => res.status(500).send('There was an error in the proof generation'));
    });

    return expressRouter;
};

export default router;

