import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { useEffect } from "react";
import { addQuote } from "../Iib/api";

function NewQuote() {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
}

export default NewQuote;
