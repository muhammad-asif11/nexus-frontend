type Props = {
  title: string;
  value: number | string;
  color: string;
};

export default function StatCard({ title, value, color }: Props) {
  return (
    <div className={`p-6 rounded-xl text-white ${color}`}>
      <h3 className="text-lg opacity-80">{title}</h3>

      <p className="text-4xl font-bold mt-2 text-end">{value}</p>
    </div>
  );
}
