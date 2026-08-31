import { Button } from "../components/ui/Button";

const NotFoundPage = () => {
  return (
    <section className="min-h-screen bg-[--color-bg-base] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-[--color-text-primary] text-4xl font-bold mb-4">
          404
        </h1>
        <p className="text-[--color-text-secondary] text-lg mb-6">
          Página no encontrada
        </p>
        <Button variant="primary" className="mt-4">
          Volver al inicio
        </Button>
      </div>
    </section>
  );
};

export default NotFoundPage;
