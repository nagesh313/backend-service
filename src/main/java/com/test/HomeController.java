///*
// * Copyright 2014 the original author or authors.
// *
// * Licensed under the Apache License, Version 2.0 (the "License");
// * you may not use this file except in compliance with the License.
// * You may obtain a copy of the License at
// *
// *      https://www.apache.org/licenses/LICENSE-2.0
// *
// * Unless required by applicable law or agreed to in writing, software
// * distributed under the License is distributed on an "AS IS" BASIS,
// * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// * See the License for the specific language governing permissions and
// * limitations under the License.
// */
//package com.test;
//
//import com.restfb.DefaultFacebookClient;
//import com.restfb.FacebookClient;
//import com.restfb.Version;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.client.RestTemplate;
//
//import java.io.UnsupportedEncodingException;
//import java.net.URISyntaxException;
//import java.util.Map;
//
//@RestController
//@RequestMapping("/api/v1")
//public class HomeController {
//    @GetMapping("/user")
//    public Map<String, Object> user(
////            @AuthenticationPrincipal Principal principal
//    ) {
//        System.out.println("/user");
////        return Collections.singletonMap("name", principal.getName());
//        return null;
//    }
//
//    private String appId = "747839375883682";
//    private String appSecret = "32b59d047742d623d5bf5d9551322af4";
//    private String clientToken = "88f4c302708a65c4acc8ca19f8b2fb86";
//    public static final String FQL_ME_TAGGED_PLACES = "/me/tagged_places";
//    public static final String NAME = "name";
//    public static final String COUNTRY = "country";
//    public static final String CITY = "city";
//    public static final String EMPTY_STRING = "";
//    private String MY_ACCESS_TOKEN = appId + "|" + clientToken;
//
//    @GetMapping("/token")
//    public String token() throws URISyntaxException, UnsupportedEncodingException {
//        System.out.println("/user");
//        RestTemplate restTemplate = new RestTemplate();
////        String baseUrl = "https://graph.facebook.com/me?fields=id,name&access_token=" + appId + "|" + clientToken;
////        String baseUrl = "https://graph.facebook.com/me?fields=id,name&access_token=EAAKoJZBxZAPaIBANJyw8uZAHD9pUuRKu8yZClqZBPRw2RHs0JgbYET0nzl7mkSDzRX63kwKZCrRPqBAPrM3WpdZAyG8PcLiI26mtMxZCJnUZByZCFSubVnwSvZBJcQt3PT88NZCe7BtXbcptmRZBykOQX1YYES4Qf1q07iVNTmuPWZCRLzG2HR7ucJmZBjakkKSNOeEJTdZAmEx6ED7PZADjnn9zPCIZClMc1cfpoFsjgtBSlKM6jSZAQZDZD";
//
//
////        baseUrl = URLEncoder.encode(baseUrl, "UTF-8");
////
////        URI uri = new URI(baseUrl);
//
////        ResponseEntity<String> result = restTemplate.getForEntity(uri, String.class);
////        FacebookClient fbClient = new DefaultFacebookClient(MY_ACCESS_TOKEN, Version.LATEST);
//        DefaultFacebookClient facebookClient = new DefaultFacebookClient(Version.LATEST);
//        FacebookClient.AccessToken token = facebookClient.obtainAppAccessToken(appId, appSecret);
////        FacebookClient.AccessToken token2 = facebookClient.obtain(appId, appSecret);
//
//        String baseUrl = "https://graph.facebook.com/me?fields=id,name&access_token=" + token;
//        ResponseEntity<String> result = restTemplate.getForEntity(baseUrl, String.class);
////        ResponseEntity<String> result1 = restTemplate.getForEntity("https://graph.facebook.com/" + appId + "/accounts?access_token=" + token.getAccessToken(), String.class)
////        JsonObject placeObjects = fbClient.fetchObject(FQL_ME_TAGGED_PLACES, JsonObject.class);
////        FacebookClient.AccessToken accessToken = facebookClient.obtainUserAccessToken(
////                appId, appSecret, "http://localhost:8080", clientToken);
////        JsonArray array = placeObjects.getJsonArray("data");
////        List<Place> places = new ArrayList<>();
////        for (int i = 0; i < array.length(); i++) {
////            Place place = new Place();
////            JsonObject rootJsonObject = (JsonObject) array.get(i);
////            JsonObject placeJsonObject = (JsonObject) rootJsonObject.get("place");
////            JsonObject locationJsonObject = (JsonObject) placeJsonObject.get("location");
////            place.setName(placeJsonObject.has(NAME) ? placeJsonObject.get(NAME).toString() : EMPTY_STRING);
////            place.setCity(locationJsonObject.has(CITY) ? locationJsonObject.get(CITY).toString() : EMPTY_STRING);
////            place.setCountry(locationJsonObject.has(COUNTRY) ? locationJsonObject.get(COUNTRY).toString() : EMPTY_STRING);
////            places.add(place);
////            System.out.println(array.get(i).toString());
////        }
//
////        return places;
////graph.facebook.com/me?fields=id,name?access_token=747839375883682|88f4c302708a65c4acc8ca19f8b2fb86
////        return Collections.singletonMap("name", principal.getName());
//        return null;
//    }
//}
