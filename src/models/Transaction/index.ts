export enum TransactionType {
  In = 'Entrada',
  Out = 'Saída',
}

export enum TransactionCategory {
  Food = "Alimentação",
  Transport = "Transporte",
  Services = "Serviços",
  Clothing = "Vestuário",
  Education = "Educação",
  Others = "Outros",
}

export interface Transaction {
  id?: string;
  title: string;
  type: TransactionType;
  category: TransactionCategory;
  value: number;
  date?: Date;
}
