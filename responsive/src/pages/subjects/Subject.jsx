import { subjects } from '../../utils/cards.js'
import { motion } from "framer-motion"
import CloudBackground from '../../components/Clouds.js';
import HaloBackground from '../../components/Halo.js';
import { ArrowUpRight } from 'lucide-react';

export default function UpdatedSubjects() {
    return (
        <div className="h-full relative">
            <CloudBackground />
            <div className="relative text-white h-full flex flex-col">
                <main className="flex-1 flex items-center">
                    <div className="relative h-full w-full px-8">
                        <div className="flex w-full h-full">
                            <div className="flex flex-col grow justify-between font-light align-bottom h-full py-8 px-8 2xl:py-16 2xl:px-12">
                                {subjects?.map((subject) => (
                                    <div
                                        key={subject?.title}
                                        className="flex gap-4 items-center cursor-pointer transform transition-all duration-150 ease-in-out 
                                        hover:scale-105 hover:translate-x-6 hover:text-orange-100
                                        [text-shadow:0_2px_4px_rgba(0,0,0,0.3)]
                                        hover:[text-shadow:0_4px_15px_rgba(255,165,0,0.8)]"
                                    >
                                        <span className='relative left-1 bottom-1'>{subject?.svg}</span>
                                        <span className="text-3xl tracking-wide inline-block">
                                            {subject?.title}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className='self-center max-w-md flex-1 mr-20'>
                                {/* <p className='text-3xl/relaxed mb-4 mr-4 relative right-4'>Learn the rudiment of design with John Steed, Product Lead at Learnfy</p> */}
                                {/* <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all duration-300 hover:border-orange-500/50 hover:bg-zinc-800/50"
                                >
                                    <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl transition-all duration-300 group-hover:bg-orange-500/20"></div>
                                    <div className="relative z-10 space-y-6">
                                    <div className="inline-flex rounded-full bg-orange-500/10 px-4 py-1.5 text-sm text-orange-500 transition-all duration-300 group-hover:bg-orange-500/20">
                                        Featured Course
                                    </div>
                                    <h2 className="text-4xl font-bold leading-tight text-white transition-all duration-300 group-hover:text-orange-500">
                                        Learn the rudiment of design
                                    </h2>
                                    <p className="text-lg text-zinc-400 transition-all duration-300 group-hover:text-zinc-300">
                                        with John Steed, Product Lead at Learnfy
                                    </p>
                                    <button className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-orange-600 group-hover:bg-orange-600">
                                        Start Learning
                                        <ArrowUpRight className="h-4 w-5 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </button>
                                    </div>
                                </motion.div> */}
                                <img src="/BVM_logo2.png" alt="logo" className='object-fill' />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}