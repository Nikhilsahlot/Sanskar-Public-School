import { FileText, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function FeePayment() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const handlePayFees = (upiId: string, name: string) => {
    const note = 'School Fee Payment';
    const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&tn=${encodeURIComponent(note)}`;
    window.location.href = upiUrl;
  };

  const feeStructure = [
    { class: 'Pre-Nursery to UKG', monthly: '₹700' },
    { class: 'Class I - II', monthly: '₹800' },
    { class: 'Class III - V', monthly: '₹900' },
    { class: 'Class VI - VIII', monthly: '₹1,000' },
  ];

  return (
    <section id="fee-payment" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" style={{ opacity }}>
          <motion.h2
            className="text-4xl mb-4 text-gray-900"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Fee Payment
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Secure and convenient online fee payment via UPI
          </motion.p>
        </motion.div>

        <div className="flex flex-col gap-8 max-w-3xl mx-auto">
          {/* Fee Structure */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Fee Structure 2024-25
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {feeStructure.map((item, index) => (
                    <motion.div
                      key={index}
                      className="border-b pb-3 last:border-b-0"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-gray-900">{item.class}</span>
                        <span className="text-blue-600">{item.monthly}/month</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Payment Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5" />
                  Pay Fees Online
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center py-8">
                    <motion.div
                      className="mb-4"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.5, type: 'spring' }}
                    >
                      <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Smartphone className="h-10 w-10 text-blue-600" />
                      </div>
                      <h3 className="text-xl mb-2 text-gray-900">Pay via UPI</h3>
                      <p className="text-gray-600 mb-2">
                        Pay school fees directly using any UPI app
                      </p>
                      <p className="text-sm text-gray-500">
                        PhonePe, Google Pay, Paytm, or any other UPI app
                      </p>
                    </motion.div>

                    {/* Payment details */}
                    <motion.div
                      className="bg-blue-50 p-4 rounded-lg mb-6 space-y-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div>
                        <p className="text-sm text-gray-700 mb-1">Payment to:</p>
                        <p className="text-gray-900 mb-1">Sanskar Public School</p>
                        <p className="text-blue-600">9871191242, 9560482061</p>
                      </div>
                    </motion.div>

                    {/* Buttons side by side */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          onClick={() =>
                            handlePayFees('9871191242@ptsbi', 'Sanskar Public School')
                          }
                          size="lg"
                          className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700"
                        >
                          <Smartphone className="h-5 w-5 mr-2" />
                          Proceed to Pay Fees
                        </Button>
                      </motion.div>

                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          onClick={() =>
                            handlePayFees('9560482061@ptaxis', 'Sanskar Public School')
                          }
                          size="lg"
                          className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700"
                        >
                          <Smartphone className="h-5 w-5 mr-2" />
                          Proceed to Pay Fees
                        </Button>
                      </motion.div>
                    </div>
                  </div>

                  <div className="p-3 bg-yellow-50 border border-yellow-200 rounded text-sm text-gray-700">
                    <p>
                      <strong>Note:</strong> Click the button above to open your UPI payment app.
                      Make sure to add the student's name and class in the payment note for proper
                      tracking.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
