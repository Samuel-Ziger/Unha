
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Clock, User, Mail, Phone } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const availableTimes = [
  "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"
];

export default function SchedulingPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const storedBookings = localStorage.getItem('bookedSlots');
    if (storedBookings) {
      setBookedSlots(JSON.parse(storedBookings).map(slot => ({
        ...slot,
        date: new Date(slot.date) 
      })));
    }
  }, []);

  const saveBooking = (newBooking) => {
    const updatedBookings = [...bookedSlots, newBooking];
    setBookedSlots(updatedBookings);
    localStorage.setItem('bookedSlots', JSON.stringify(updatedBookings));
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const isSlotBooked = (date, time) => {
    if (!date) return false;
    return bookedSlots.some(
      slot => 
        slot.date.toDateString() === date.toDateString() && 
        slot.time === time
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !name || !email || !phone) {
      toast({
        title: "Campos incompletos 📝",
        description: "Por favor, preencha todos os campos e selecione data e horário.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    const newBooking = { 
      date: selectedDate, 
      time: selectedTime,
      name,
      email,
      phone 
    };
    saveBooking(newBooking);
    
    toast({
      title: "Agendamento Confirmado! 🎉",
      description: `Obrigada, ${name}! Seu horário para ${selectedDate.toLocaleDateString('pt-BR')} às ${selectedTime} foi agendado com sucesso.`,
      duration: 5000,
    });

    setSelectedTime(null);
    setName('');
    setEmail('');
    setPhone('');
  };
  
  const today = new Date();
  today.setHours(0,0,0,0); 

  return (
    <motion.div 
      className="min-h-screen bg-slate-900 text-white py-16 px-4 md:px-8 pattern-dots"
      initial="initial"
      animate="animate"
      variants={fadeInUp}
    >
      <div className="container mx-auto max-w-4xl">
        <motion.h1 
          className="text-4xl md:text-5xl font-black mb-10 text-center gradient-text"
          variants={fadeInUp}
        >
          Agende seu Horário
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div variants={fadeInUp} className="glass-effect p-6 rounded-xl">
            <h2 className="text-2xl font-semibold mb-4 text-center">Escolha uma Data</h2>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateChange}
              className="rounded-md border bg-slate-900/80 w-full"
              disabled={(date) => date < today || date.getDay() === 0 }
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            {selectedDate && (
              <div className="glass-effect p-6 rounded-xl mb-8">
                <h2 className="text-2xl font-semibold mb-6 text-center">
                  Horários Disponíveis para <span className="gradient-text">{selectedDate.toLocaleDateString('pt-BR')}</span>
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {availableTimes.map(time => {
                    const booked = isSlotBooked(selectedDate, time);
                    return (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        className={`w-full py-3 text-lg ${
                          selectedTime === time ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'border-purple-500 text-purple-400 hover:bg-purple-500/20'
                        } ${booked ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={() => !booked && handleTimeSelect(time)}
                        disabled={booked}
                      >
                        <Clock className="w-4 h-4 mr-2" /> {time}
                        {booked && <span className="text-xs ml-1">(Indisp.)</span>}
                      </Button>
                    );
                  })}
                </div>
              </div>
            )}

            {selectedDate && selectedTime && (
              <motion.form 
                onSubmit={handleSubmit} 
                className="glass-effect p-6 rounded-xl"
                variants={fadeInUp}
              >
                <h2 className="text-2xl font-semibold mb-6 text-center">Seus Dados</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Nome Completo</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400" />
                      <input 
                        type="text" 
                        id="name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 pl-10 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                     <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400" />
                      <input 
                        type="email" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 pl-10 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
                        placeholder="seuemail@exemplo.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1">Telefone (WhatsApp)</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400" />
                      <input 
                        type="tel" 
                        id="phone" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 pl-10 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
                        placeholder="(XX) XXXXX-XXXX"
                        required
                      />
                    </div>
                  </div>
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 text-lg mt-4 pulse-glow"
                  >
                    Confirmar Agendamento
                  </Button>
                </div>
              </motion.form>
            )}
          </motion.div>
        </div>

        {bookedSlots.length > 0 && (
          <motion.div 
            className="mt-16 glass-effect p-6 rounded-xl"
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-semibold mb-6 text-center gradient-text">Horários Já Agendados</h2>
            <ul className="space-y-3 max-h-60 overflow-y-auto">
              {bookedSlots
                .sort((a,b) => new Date(a.date) - new Date(b.date) || a.time.localeCompare(b.time))
                .map((slot, index) => (
                <li key={index} className="bg-slate-800/50 p-3 rounded-lg flex justify-between items-center">
                  <div>
                    <span className="font-semibold">{slot.name}</span> - <span className="text-slate-400">{slot.email}</span>
                  </div>
                  <div className="text-purple-400 font-medium">
                    {slot.date.toLocaleDateString('pt-BR')} às {slot.time}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
