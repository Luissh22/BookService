package BookServiceLambda.activity;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class HelloWorldHandler implements RequestHandler<String, String> {
    @Override
    public String handleRequest(String input, Context context) {
        log.info("Received input: {}", input);
        return "Hello, world!";
    }
}
