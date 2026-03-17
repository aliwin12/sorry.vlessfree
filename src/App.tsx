/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Settings, Shield, Activity, Terminal, AlertTriangle, Globe } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#00ff00] font-mono flex flex-col items-center justify-center p-4 overflow-hidden relative">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#00ff00 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Scanning Line Animation */}
      <motion.div 
        initial={{ top: "-10%" }}
        animate={{ top: "110%" }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[2px] bg-[#00ff00] opacity-20 shadow-[0_0_15px_#00ff00] z-10"
      />

      <div className="max-w-2xl w-full z-20 space-y-8">
        {/* Header Section */}
        <div className="flex items-center justify-between border-b border-[#00ff00]/30 pb-4">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 animate-pulse" />
            <h1 className="text-2xl font-bold tracking-tighter uppercase">VLESSFree // Ядро</h1>
          </div>
          <div className="text-right">
            <div className="text-[10px] opacity-50 uppercase tracking-widest">Статус системы</div>
            <div className="flex items-center gap-2 justify-end">
              <span className="w-2 h-2 bg-yellow-500 rounded-full animate-ping" />
              <span className="text-yellow-500 text-sm">ТЕХОБСЛУЖИВАНИЕ</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#111] border border-[#00ff00]/20 p-8 rounded-lg shadow-[0_0_50px_rgba(0,255,0,0.05)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-2 opacity-10">
            <Settings className="w-24 h-24 animate-[spin_10s_linear_infinite]" />
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl font-black uppercase tracking-tighter leading-none">
                Технические <br />
                <span className="text-white">Работы</span>
              </h2>
              <p className="text-[#00ff00]/70 max-w-md">
                Исправляем неполадки в работе сайта, извините за неудобства. 
                VLESS-конфигурации НЕ приостановлены.
              </p>
            </div>

            {/* Progress Bars */}
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] uppercase tracking-wider">
                  <span>Миграция базы данных</span>
                  <span>84%</span>
                </div>
                <div className="h-1 bg-[#00ff00]/10 w-full rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "84%" }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="h-full bg-[#00ff00]"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] uppercase tracking-wider">
                  <span>Синхронизация узлов</span>
                  <span>42%</span>
                </div>
                <div className="h-1 bg-[#00ff00]/10 w-full rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "42%" }}
                    transition={{ duration: 2, delay: 0.8 }}
                    className="h-full bg-[#00ff00]"
                  />
                </div>
              </div>
            </div>

            {/* Terminal Output */}
            <div className="bg-black/50 p-4 rounded border border-[#00ff00]/10 font-mono text-[11px] space-y-1">
              <div className="flex gap-2">
                <span className="text-[#00ff00]/40">[09:20:36]</span>
                <span>ИНИЦИАЛИЗАЦИЯ_ОБНОВЛЕНИЯ...</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[#00ff00]/40">[09:20:38]</span>
                <span className="text-yellow-500">ВНИМАНИЕ: НЕСТАБИЛЬНОЕ_СОЕДИНЕНИЕ</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[#00ff00]/40">[09:20:41]</span>
                <span>ОЧИСТКА_КЭШ_БУФЕРОВ... OK</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[#00ff00]/40">[09:20:45]</span>
                <span className="animate-pulse">ОЖИДАНИЕ_ПОДТВЕРЖДЕНИЯ_АДМИНА_</span>
              </div>
            </div>
          </div>
        </motion.div>


        <div className="text-center pt-8 opacity-30 text-[10px] uppercase tracking-[0.3em]">
          (C) 2026 vlessfree
        </div>
      </div>

      {/* Decorative Corner Elements */}
      <div className="fixed top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#00ff00]/20 m-4" />
      <div className="fixed top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#00ff00]/20 m-4" />
      <div className="fixed bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#00ff00]/20 m-4" />
      <div className="fixed bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#00ff00]/20 m-4" />
    </div>
  );
}
