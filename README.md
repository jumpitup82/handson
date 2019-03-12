# handson

## e-store 강의
#### docker 기초
* https://www.slideshare.net/pyrasis/docker-fordummies-44424016

#### RBQ
1. rabbitMQ 설정
  - https://confluence.samsungmtv.com/display/GRSDS/cze++Fulfillment+Service
2. rabbitMQ 설명
  - https://github.com/gjchoi/gjchoi.github.io/blob/master/_posts/2016-02-27-rabbit-mq-이해하기.md
  - https://www.rabbitmq.com/channels.html
3. rabbitMQ Manager 실습
  - http://localhost:15672
4. hands-on 실습
  - tests/rabbitMQ/queue/sample.spec.js
    * amqplib 사용
  - tests/rabbitMQ/worker/queue-worker.spec.js
    * exchange type : direct, fanout, topic, header
    * topic에 pattern 없으면 direct 동
  - https://stackoverflow.com/questions/20128124/amqp-vs-amqplib-which-node-js-amqp-client-library-is-better
    * amqplib(amqp.node) 추천
    * amqp(node-amqp)는 channel 개념이 숨겨져있다. update가 느리다.

#### Redis
redis에서 value의 타입이 object인 경우 JSON.stringify를 통해 json 문자열로 업데이트한다.
redis는 메모리 저장소, 읽기 쓰기가 상당히 빠르다.
redis는 싱글스레드다. memcached와 차별점은 데이터가 유지된다. 저장소를 가지고 디스크에 저장한다 (즉시 쓰기:AOF, 주기마다:RDB)
redis는 여러가지 타입을 지원 (Set, List, Hash)

1. redis 설정
  - https://confluence.samsungmtv.com/display/GRSDS/mtv++Setting-up+Redis
  - $ docker exec -it redis bash
  - $ redis-cli
2. redis command
  - https://redis.io/commands
  - db: select
  - set, get, del
  - sadd, smembers, srem
3. anti pattern
  - keys *
  - flushAll, flushdb
4. hands-on 실습
  - tests/redis/index.spec.js


#### ES
1. es docker 설정
  - https://confluence.samsungmtv.com/display/GRSDS/mtv++Setting-up+Elasticsearch

