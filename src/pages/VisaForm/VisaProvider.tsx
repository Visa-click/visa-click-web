import React, { createContext, ReactNode, useContext, useState, useEffect } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';

export type TVisaForm = {
  surname: string;
  name: string;
  patronymic?: string;
  gender: string;
  birthDate: string;
  type: string;
  passportNumber: string;
  citizenship: string;
  placeOfBirth: string;
  issueDate: string;
  expiryDate: string;
  issuingAuthority: string;
};

type Step = 'scanning' | 'manualForm' | 'payment' | 'paymentSuccess';

export const stepDictionary: Record<Step, number> = {
  scanning: 1,
  manualForm: 2,
  payment: 3,
  paymentSuccess: 4,
};

type VisaContextType = {
  form: UseFormReturn<TVisaForm>;
  currentStep: Step;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: Step) => void;
};

const VisaContext = createContext<VisaContextType | undefined>(undefined);

export const useVisaContext = () => {
  const context = useContext(VisaContext);
  if (context === undefined) {
    throw new Error('useVisaContext must be used within a VisaProvider');
  }

  return context;
};

type Props = {
  children: ReactNode;
  form: UseFormReturn<TVisaForm>;
};

export const VisaProvider: React.FC<Props> = ({ children, form }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentStep, setCurrentStep] = useState<Step>(() => {
    const step = searchParams.get('step');
    return step && ['scanning', 'manualForm', 'payment', 'paymentSuccess'].includes(step)
      ? (step as Step)
      : 'scanning';
  });

  useEffect(() => {
    setSearchParams({ step: currentStep });
  }, [currentStep, setSearchParams]);

  const nextStep = () => {
    setCurrentStep((prevStep) => {
      switch (prevStep) {
        case 'scanning':
          return 'manualForm';
        case 'manualForm':
          return 'payment';
        case 'payment':
          return 'paymentSuccess';
        default:
          return 'scanning';
      }
    });
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => {
      switch (prevStep) {
        case 'paymentSuccess':
          return 'payment';
        case 'payment':
          return 'manualForm';
        case 'manualForm':
          return 'scanning';
        default:
          return 'scanning';
      }
    });
  };

  const goToStep = (step: Step) => {
    setCurrentStep(step);
  };

  return (
    <VisaContext.Provider value={{ form, currentStep, nextStep, prevStep, goToStep }}>
      {children}
    </VisaContext.Provider>
  );
};
